import React, { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  content: string;
  image?: string;
};

export default function ArticleClient({ id }: { id?: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://back.fmed.ml/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!article) return <p>Article introuvable</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      {article.image && <img src={article.image} alt={article.title} />}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}
