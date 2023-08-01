import React, { useCallback, useRef, useState } from "react";
import styles from "./NewProduct.module.css";
import { uploadImage } from "../../API/Cloudinary";
import { addNewProduct } from "../../API/Firebase";

export default function NewProduct() {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({});
  const addPhoto = useRef(null);
  const photoInput = useRef(null);

  const onChange = () => {
    setFile(photoInput.current.files[0]);
  };

  const onClick = () => {
    photoInput.current.click();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => {
      console.log(url);
      addNewProduct(product, url)
    });
  };

  const handleInfo = e => {
    const {name, value} = e.target
    setProduct({...product, [name]:value})
  }

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      addPhoto.current.style.backgroundImage = `url(${reader.result})`;
    };
  }

  return (
    <div className={styles.container}>
      <h3>새로운 제품 등록</h3>
      <form className={styles.form}>
        <div
          className={styles.photoZone}
          id="addPhoto"
          ref={addPhoto}
          onClick={onClick}
        />
        <input
          type="file"
          id="photoInput"
          accept=".png, .jpg, .jpeg"
          ref={photoInput}
          onChange={onChange}
          required
        />
        <input type="text" name="name" onChange={handleInfo} required placeholder="제품명" />
        <input type="number" name="price" onChange={handleInfo} required placeholder="가격(원)" />
        <input type="text" name="category" onChange={handleInfo} required placeholder="카테고리" />
        <input type="text" name="description" onChange={handleInfo} required placeholder="제품 설명" />
        <input type="text" name="options" onChange={handleInfo} required placeholder="사이즈(대문자, 콤마로 구분)" />
      </form>
      <button onClick={handleSubmit} className={styles.submit}>
        제품 등록하기
      </button>
    </div>
  );
}
