// jitsi/VideoConsult.jsx
import React, { useEffect, useRef } from "react";

function VideoConsult() {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    // Load Jitsi script
    const loadJitsiScript = () => {
      if (!window.JitsiMeetExternalAPI) {
        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.onload = startConference;
        document.body.appendChild(script);
      } else {
        startConference();
      }
    };

    // Start Jitsi conference
    const startConference = () => {
      const domain = "meet.jit.si";
      const options = {
        roomName: "HealthEaseRoom123", // Unique room name
        parentNode: jitsiContainerRef.current,
        width: "100%",
        height: 500,
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "fullscreen",
            "hangup",
            "chat",
            "settings",
          ],
        },
      };
      new window.JitsiMeetExternalAPI(domain, options);
    };

    loadJitsiScript();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2">Video Consultation</h2>
      <p className="mb-4">
        Connect with a doctor through secure video call.
      </p>
      <div ref={jitsiContainerRef} className="w-full"></div>
    </div>
  );
}

export default VideoConsult;
