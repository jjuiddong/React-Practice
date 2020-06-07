import React from 'react';
import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="Delete Post" 
      description="Is Delete Post?" 
      confirmText="Delete"
      onConfirm={onConfirm}
      onCancel={onCancel}>
    </AskModal>
  );
};

export default AskRemoveModal;
