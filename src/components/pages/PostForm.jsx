import React from "react";
import Default from "../templates/Default";

export default function PostForm() {
  return (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <htmlForm className="create-post__htmlForm">
          <div className="create-post__htmlForm-name">
            <label htmlFor="name">Título</label>
            <input type="text" id="name" name="title" />
          </div>
          <div className="create-post__htmlForm-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea name="content" id="content"></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </htmlForm>
      </div>
    </Default>
  );
}
