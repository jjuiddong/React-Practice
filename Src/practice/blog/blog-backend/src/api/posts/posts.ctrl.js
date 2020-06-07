import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Types;

const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http'],
};

// checkObjectId
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // bad request
    return;
  }
  return next();
};

// getPostById
export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // bad request
    return;
  }
  try {
    const post = await Post.findById(id);
    if (!post) {
      ctx.status = 404; // not found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

// checkOwnPost
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

// remove html tag, and max 200 char
const removeHtmlAndShorten = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `$(filtered.slice(0,200))}...`;
};

// POST /api/posts
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 404; // bad request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body : sanitizeHtml(body, sanitizeOption),
    tags,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/posts?username=&tag=&page=
export const list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts
      .map((post) => post.toJSON())
      .map((post) => ({
        ...post,
        body:
          //post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
          removeHtmlAndShorten(post.body),
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/posts/:id
export const read = async (ctx) => {
  ctx.body = ctx.state.post;
  // const { id } = ctx.params;
  // try {
  //   const post = await Post.findById(id).exec();
  //   if (!post) {
  //     ctx.status = 404; // not found
  //     return;
  //   }
  //   ctx.body = post;
  // } catch (e) {
  //   ctx.throw(e);
  // }
};

// DELETE /api/posts/:id
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // not content
  } catch (e) {
    ctx.throw(e);
  }
};

// PATCH /api/posts/:id
export const update = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 404; // bad request
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  const nextData = {...ctx.request.body};
  if (nextData.body) {
    nextData.body = sanitizeHtml(nextData.body);
  }
  
  try {
    const post = await Post.findByIdAndUpdate(id, nextData, {
      new: true,
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

//chapter21
//let postId = 1;

// const posts = [
//   {
//     id: 1,
//     title: '제목',
//     body: '내용',
//   },
// ];

// /* 포스트 작성
// POST /api/posts
// { title, body }
// */
// export const write = ctx => {
//   const { title, body } = ctx.request.body;
//   postId += 1;
//   const post = { id: postId, title, body };
//   posts.push(post);
//   ctx.body = post;
// };

// /* 포스트 목록 조회
// GET /api/posts
// */
// export const list = ctx => {
//   ctx.body = posts;
// };

// /* 특정 포스트 조회
// GET /api/posts/:id
// */
// export const read = ctx => {
//   const { id } = ctx.params;
//   const post = posts.find(p => p.id.toString() === id);
//   if (!post) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   ctx.body = post;
// };

// /* 특정 포스트 제거
// DELETE /api/posts/:id
// */
// export const remove = ctx => {
//   const { id } = ctx.params;
//   const index = posts.findIndex(p => p.id.toString() === id);
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   posts.splice(index, 1);
//   ctx.status = 204; // No Content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// { title, body }
// */
// export const replace = ctx => {
//   const { id } = ctx.params;
//   const index = posts.findIndex(p => p.id.toString() === id);
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   posts[index] = {
//     id,
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };

// /* 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
// */
// export const update = ctx => {
//   const { id } = ctx.params;
//   const index = posts.findIndex(p => p.id.toString() === id);
//   if (index === -1) {
//     ctx.status = 404;
//     ctx.body = {
//       message: '포스트가 존재하지 않습니다.',
//     };
//     return;
//   }
//   posts[index] = {
//     ...posts[index],
//     ...ctx.request.body,
//   };
//   ctx.body = posts[index];
// };
