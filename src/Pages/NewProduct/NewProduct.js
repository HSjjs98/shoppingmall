import React, { useCallback, useRef } from "react";
import styles from "./NewProduct.module.css";
import { uploadImage } from "../../API/Cloudinary";

export default function NewProduct() {
  const addPhoto = useRef(null);
  const photoInput = useRef(null);
  const onChange = useCallback(() => {
    const file = photoInput.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        addPhoto.current.style.backgroundImage = `url(${reader.result})`;
      };
    }
  }, []);

  const onClick = useCallback(() => {
    photoInput.current.click();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = photoInput.current.files[0];
    uploadImage(file).then((url) => {
      console.log(url);
    });
  };
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

        <input type="text" required placeholder="제품명" />
        <input type="number" required placeholder="가격(원)" />
        <input type="text" required placeholder="카테고리" />
        <input type="text" required placeholder="제품 설명" />
        <input type="text" required placeholder="사이즈(대문자, 콤마로 구분)" />
      </form>
      <button onClick={handleSubmit} className={styles.submit}>
        제품 등록하기
      </button>
    </div>
  );
}
