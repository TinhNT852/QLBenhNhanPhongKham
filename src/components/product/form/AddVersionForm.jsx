import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./AddVersionForm.css";


const AddVersionForm = ({ visible, onClose }) => {
  const [productId, setProductId] = useState("");
  const [versionName, setVersionName] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [creatorEmail, setCreatorEmail] = useState("");
  const [changeNote, setChangeNote] = useState("");

  const handleAddVersion = () => {
    alert("Thêm phiên bản thành công!");
    onClose();
  };

  return (
    <Modal
      className="add-version-content"
      title="Thêm phiên bản"
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
    >
      <h2>Thông tin chi tiết</h2>
      <div className="form-row-av">
        <div className="form-group-av">
          <label>ID Sản Phẩm</label>
          <input
            type="text"
            placeholder="ACC"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="form-group-av">
          <label>Phiên Bản Sản Phẩm</label>
          <input
            type="text"
            placeholder="1.0.2"
            value={versionName}
            onChange={(e) => setVersionName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row-av">
        <div className="form-group-av">
          <label>Tên Phiên Bản Cập Nhật</label>
          <input
            type="text"
            placeholder="Nhập tên phiên bản cập nhật"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        </div>
        <div className="form-group-av">
          <label>Người tạo</label>
          <input
            type="text"
            placeholder="Nhập thông tin email"
            value={creatorEmail}
            onChange={(e) => setCreatorEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row-av">
        <div className="form-group-av full-width">
          <label>Ghi Chú Thay Đổi</label>
          <textarea
            rows="2"
            placeholder="Nhập ghi chú thay đổi"
            value={changeNote}
            onChange={(e) => setChangeNote(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="add-version-footer">
        <Button
          className="btn-add-version-form"
          type="primary"
          onClick={handleAddVersion}
        >
          Thêm phiên bản
        </Button>
      </div>
    </Modal>
  );
};

export default AddVersionForm;
