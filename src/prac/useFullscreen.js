import React, { useState, useRef, useEffect } from "react";
export const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback) {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback) {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};
