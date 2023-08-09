import React from 'react';
import "../styles/GlobalStyles.css";

const notFound = '../public/404.png';
function NotFoundPage() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <img id="notfound404" src={notFound} alt="" srcset="" />
    </div>
  );
}
export default NotFoundPage;