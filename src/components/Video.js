import React, { useState, useRef, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import "./Video.css";

const Video = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({ video: true });

  const downloadRecording = () => {
    const pathName = `screen_recording.mp4`;
    try {
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // for IE
        window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
      } else {
        // for Chrome
        const link = document.createElement("a");
        link.href = mediaBlobUrl;
        link.download = pathName;
        console.log(link);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getLocalStream = () => {
    navigator.getUserMedia(
      { audio: true, video: true },
      function (stream) {
        stream.getTracks().forEach((x) => x.stop());
      },
      (err) => {
        alert("Please allow your mic and camera to record");
        getLocalStream();
      }
    );
  };

  useEffect(() => {
    getLocalStream();
  }, []);

  return (
    <div className="video">
      <div className="video_container">
        <h1>Detect Dyslexia using video/Camera</h1>
        <input type="file" name="" id="" />
        <p>OR</p>
        <p>Click on start button and read the given paragraph.</p>
        <p className="read">
          Horses are farm animals. They are usually black, grey, white and brown
          in colour. They are known as beasts of burden. They carry people and
          goods from one place to another. They have long legs, which are very
          strong. They can easily run long distances. Horses have hard hoofs
          which protect their feet. They like eating grass and grams they are
          used in sports like polo and hors riding. An adult male horse is
          called a stallion and an adult female is called a mare whereas the
          female baby horse is called a foal and a male baby horse is called a
          colt. Horses usually move in herds. They live in a stable. They are
          very useful animals.
        </p>
        <div className="record_btn">
          <button
            className="start"
            onClick={status !== "recording" ? startRecording : () => null}
          >
            Start
          </button>
          <button
            className="stop"
            onClick={
              status === "recording"
                ? () => {
                    stopRecording();
                    downloadRecording();
                  }
                : () => null
            }
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
