import React from "react";

export const useNotification = (title, options) => {
  //브라우저 알람 생성하기
  if (!Notification) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      //알람 표시 권한 확인
      Notification.requestPermission().then((permission) => {
        // 권한 요청
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};
