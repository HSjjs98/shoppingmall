import React, { useCallback, useRef } from "react";
import styles from "./NewProduct.module.css";

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
        />
        
        <input type="text" placeholder="제품명" />
        <input type="number" placeholder="가격(원)" />
        <input type="text" placeholder="카테고리" />
        <input type="text" placeholder="제품 설명" />
        <input type="text" placeholder="사이즈(대문자, 콤마로 구분)" />
      </form>
        <button className={styles.submit}>제품 등록하기</button>
    </div>
  );
}
