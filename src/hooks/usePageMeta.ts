// hooks/usePageMeta.ts
import { useEffect } from 'react';

export function usePageMeta({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  useEffect(() => {
    // Título
    if (title) document.title = title;

    // Meta descripción
    if (description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);
}
