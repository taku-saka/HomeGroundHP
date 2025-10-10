import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';

interface CustomRouterProps {
  children: React.ReactNode;
}

function URLNormalizer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // 末尾スラッシュがない場合に追加（ルートパス以外）
    if (pathname !== '/' && !pathname.endsWith('/')) {
      const newPath = pathname + '/' + search + hash;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default function CustomRouter({ children }: CustomRouterProps) {
  return (
    <Router>
      <URLNormalizer />
      {children}
    </Router>
  );
}
