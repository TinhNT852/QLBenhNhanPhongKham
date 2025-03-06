import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import CloseIcon from "../../assets/icons/ArrowLeft.png";
import CustomIcon from "../../assets/icons/Custom.png";
import DeleteIcon from "../../assets/icons/Delete.png";
import DownloadIcon from "../../assets/icons/Download.png";
import EditIcon from "../../assets/icons/Edit.png";
import InfoIcon from "../../assets/icons/Info.png";
import MoreIcon from "../../assets/icons/More.png";
import RedDeleteIcon from "../../assets/icons/RedDelete.png";
import SaveIcon from "../../assets/icons/Save.png";
import UploadIcon from "../../assets/icons/Upload.png";
import VitaminImg from "../../assets/images/Multivitamin.png";

import "./ProductStyles.css";

const ProductPage = () => {
  const [productId, setProductId] = useState("");
  const [currentunit, setCurrentunit] = useState("");
  const [productName, setProductName] = useState("");
  const [shortName, setShortName] = useState("");
  const [productNote, setProductNote] = useState("");

  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Vitamin",
      unit: "viên",
      pricePerUnit: "520",
      stockQuantity: "10000",
      description: "Tăng cường miễn dịch",
      createDate: "02/10/2024",
      checked: true,
    },
  ]);

//================= Menu ===================
  const [openMenuRowId, setOpenMenuRowId] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

//================= Detail panel ===============
  const [selectedunit, setSelectedunit] = useState(null);

  // ========== Phân trang ==========
  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = tableData.length;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  // ========== Các hàm xử lý nút ==========
  const handleDeleteSoftware = () => {
    setProductId("");
    setCurrentunit("");
    setProductName("");
    setShortName("");
    setProductNote("");
  };

  const handleSaveChanges = () => {
    alert("Lưu thay đổi!");
  };

  const handleCustomAction = () => {
    alert("Custom action!");
  };
  const handleDeleteunit = () => {
    alert("Xóa phiên bản!");
  };
  const handleEditunit = () => {
    alert("Logic chỉnh sửa phiên bản");
  };
  const handleUploadunit = () => {
    alert("Logic tải lên phiên bản");
  };
  const handleDownloadunit = () => {
    alert("Logic tải xuống phiên bản!");
  };

  const handleToggleMenu = (e, rowId) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    
    setMenuPosition({ x: rect.left, y: rect.bottom });
    setOpenMenuRowId((prev) => (prev === rowId ? null : rowId));
  };
  const handleDetailMenu = (rowId) => {
    const record = tableData.find((row) => row.id === rowId);
    if (record) {
      setSelectedunit(record);
    }
    setOpenMenuRowId(null);
  };
  const handleDownloadMenu = (rowId) => {
    alert(`Tải xuống phiên bản: ${rowId}`);
    setOpenMenuRowId(null);
  };
  const handleDeleteMenu = (rowId) => {
    alert(`Xoá phiên bản: ${rowId}`);
    setOpenMenuRowId(null);
  };

  useEffect(() => {
    const handleDocClick = () => setOpenMenuRowId(null);
    document.addEventListener("click", handleDocClick);
    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  const handleCloseDetail = () => {
    setSelectedunit(null);
  };
  const handleCheckboxChange = (id) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };
  const handleToggleAll = () => {
    const anyChecked = tableData.some((row) => row.checked);
    setTableData((prevData) =>
      prevData.map((row) => ({ ...row, checked: !anyChecked }))
    );
  };

  return (
    <div className="product-container">

      {/* ======== MAIN CONTENT (THÔNG TIN + DANH SÁCH) ======== */}
      <main className="main-content-product">
        {/* ======== Thông tin Thuốc ======== */}
        <div className="product-info-container">
          <div className="info-header">
            <h2>Thông tin Thuốc</h2>
            <div className="info-actions">
              <button className="btn-delete" onClick={handleDeleteSoftware}>
                <img src={DeleteIcon} alt="Delete" className="btn-icon" />
                Xóa phần mềm
              </button>
              <button className="btn-save" onClick={handleSaveChanges}>
                <img src={SaveIcon} alt="Save" className="btn-icon" />
                Lưu thay đổi
              </button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                ID Thuốc <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập ID thuốc"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Đơn Vị <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập đơn vị (Ví dụ: viên, chai, gói,..)"
                value={currentunit}
                onChange={(e) => setCurrentunit(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                Tên Thuốc <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập tên Thuốc"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Giá Mỗi Đơn Vị <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập giá trên mỗi đơn vị thuốc"
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                Ghi Chú Thuốc <span className="required">*</span>
              </label>
              <textarea
                placeholder="Nhập ghi chú"
                value={productNote}
                onChange={(e) => setProductNote(e.target.value)}
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>

        {/* ======== Danh sách phiên bản ======== */}
        <div className="unit-list-container">
          <div className="unit-list-header">
            <h2>Danh sách phiên bản</h2>
            <div className="unit-list-actions">
              <button className="btn-custom-unit" onClick={handleCustomAction}>
                <img src={CustomIcon} alt="Custom" className="btn-icon" />
              </button>
            </div>
          </div>
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th className="checkbox-column">
                    <input type="checkbox" onChange={handleToggleAll} />
                  </th>
                  <th>Tên Thuốc</th>
                  <th>Đơn Vị</th>
                  <th>Giá Mỗi Đơn Vị</th>
                  <th>Số Lượng Hành Tồn</th>
                  <th>Ghi Chú Thuốc</th>
                  <th>Ngày thêm</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row) => (
                  <tr key={row.id} >
                    <td
                      className="checkbox-column"
                      onClick={(e) => e.stopPropagation()} // Tránh click row
                    >
                      <input
                        type="checkbox"
                        checked={row.checked}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                    <td>
                      <strong>{row.name}</strong>
                    </td>
                    <td>{row.unit}</td>
                    <td>{row.pricePerUnit}</td>
                    <td>{row.stockQuantity}</td>
                    <td>{row.description}</td>
                    <td>{row.createDate}</td>
                    <td id="more" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="btn-more"
                        onClick={(e) => handleToggleMenu(e, row.id)}
                      >
                        <img src={MoreIcon} alt="More" className="btn-more-icon" />
                      </button>
                      {openMenuRowId === row.id &&
                        createPortal(
                          <div
                            className="menu-popover"
                            style={{
                              top: menuPosition.y,
                              left: menuPosition.x,
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="menu-item" onClick={() => handleDetailMenu(row.id)}>
                              <img src={InfoIcon} alt="Detail" className="menu-icon" />
                              Chi tiết
                            </div>
                            <div className="menu-item" onClick={() => handleDownloadMenu(row.id)}>
                              <img src={DownloadIcon} alt="Download" className="menu-icon" />
                              Tải xuống
                            </div>
                            <hr />
                            <div
                              className="menu-item menu-delete"
                              onClick={() => handleDeleteMenu(row.id)}
                            >
                              <img src={RedDeleteIcon} alt="Delete" className="menu-icon" />
                              Xoá
                            </div>
                          </div>,
                          document.body
                        )}
                    </td>
                  </tr>
                ))}
                {currentRows.length === 0 && (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Phân trang */}
          <div className="pagination">
            <div className="pagination-buttons">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ❮
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ❯
              </button>
            </div>
            <div className="page-info-container">
              <div className="page-info">
                <span>
                  {`${indexOfFirstRow + 1} - ${Math.min(
                    indexOfLastRow,
                    tableData.length
                  )} trong tổng số ${tableData.length} mục`}
                </span>
              </div>
              <div className="page-size">
                <select onChange={(e) => setCurrentPage(1)}>
                  <option value="8">8</option>
                  <option value="16">16</option>
                  <option value="32">32</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ======== PANEL CHI TIẾT PHIÊN BẢN BÊN PHẢI ======== */}
      {selectedunit && (
        <aside className="unit-detail-panel">
          <div className="detail-panel-header">
            <div className="header-top">
              <button className="btn-action btn-closes" onClick={handleCloseDetail}>
                <img src={CloseIcon} alt="Close" />
              </button>
              <h2>Chi tiết phiên bản</h2>
            </div>
            <div className="header-bottom">
              <button className="btn-action btn-edit btn-size" onClick={handleEditunit}>
                <img src={EditIcon} alt="Edit" />
              </button>
              <button className="btn-action btn-upload btn-size" onClick={handleUploadunit}>
                <img src={UploadIcon} alt="Upload" />
              </button>
              <button className="btn-action btn-download btn-size" onClick={handleDownloadunit}>
                <img src={DownloadIcon} alt="Download" />
              </button>
              <button className="btn-action btn-delete btn-size" onClick={handleDeleteunit}>
                <img src={DeleteIcon} alt="Delete" />
              </button>
            </div>
          </div>
          <div className="unit-detail-content">
            <div className="detail-icon">
              <img src={VitaminImg} alt="Folder" />
            </div>
            <h4>{selectedunit.name}</h4>

            <div className="detail-info">
              <div>
                <strong>Tên thuốc:</strong> {selectedunit.name}
              </div>
              <div>
                <strong>Đơn vị:</strong> {selectedunit.unit}
              </div>
              <div>
                <strong>Giá mỗi đơn vị:</strong> {selectedunit.pricePerUnit}
              </div>
              <div>
                <strong>Số lượng hàng tồn:</strong> {selectedunit.stockQuantity}
              </div>
              <div>
                <strong>Ngày thêm:</strong> {selectedunit.createDate}
              </div>
              <div>
                <strong>Ghi chú thuốc:</strong> {selectedunit.description}
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default ProductPage;