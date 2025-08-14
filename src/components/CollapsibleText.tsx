import React from "react";

type CollapsibleTextProps = {
  title?: string;
  text: string;
  defaultOpen?: boolean;
};

const CollapsibleText: React.FC<CollapsibleTextProps> = ({
  title = "詳細",
  text,
  defaultOpen = false,
}) => {
  if (!text) return null;

  return (
    <details className="mt-3" open={defaultOpen}>
      <summary className="cursor-pointer text-moss font-medium hover:text-moss-dark transition-colors select-none">
        {title}
      </summary>
      <div className="mt-2 whitespace-pre-line text-gray-600 leading-relaxed">
        {text}
      </div>
    </details>
  );
};

export default CollapsibleText;


