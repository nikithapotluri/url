import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LinkRedirector() {
  const { shortCode } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const allLinks = JSON.parse(localStorage.getItem("affordmedLinks") || "{}");
    const matchedLink = allLinks[shortCode];

    if (!matchedLink) {
      setError("404 – Short URL not found.");
      return;
    }

    const now = new Date();
    if (new Date(matchedLink.expiresAt) < now) {
      setError("This short link has expired.");
      return;
    }

    // Get coarse location (optional, fallback to 'Unknown')
    fetch("https://ipinfo.io/json?token=YOUR_TOKEN") // Replace with token or remove
      .then((res) => res.json())
      .then((data) => {
        const clickDetails = {
          time: now.toISOString(),
          referrer: document.referrer || "Direct",
          location: data?.city && data?.country
            ? `${data.city}, ${data.country}`
            : "Unknown",
        };

        matchedLink.clickEvents = [...(matchedLink.clickEvents || []), clickDetails];
        allLinks[shortCode] = matchedLink;
        localStorage.setItem("affordmedLinks", JSON.stringify(allLinks));

        // ✅ External redirect
        window.location.href = matchedLink.originalUrl;
      })
      .catch(() => {
        matchedLink.clickEvents = [...(matchedLink.clickEvents || []), {
          time: now.toISOString(),
          referrer: document.referrer || "Direct",
          location: "Unknown",
        }];
        allLinks[shortCode] = matchedLink;
        localStorage.setItem("affordmedLinks", JSON.stringify(allLinks));

        // ✅ External redirect fallback
        window.location.href = matchedLink.originalUrl;
      });
  }, [shortCode]);

  return <div style={{ padding: 20 }}>{error ? error : "Redirecting..."}</div>;
}
