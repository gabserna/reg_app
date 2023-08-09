import "../styles/GlobalStyles.css";
import React from 'react';

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <img id="notfound404" src="../public/404.png" alt="" srcset="" />
    </div>
  );
}
export default NotFoundPage;