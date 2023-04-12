CREATE SCHEMA base

CREATE TABLE base.users (
  id_user SERIAL PRIMARY KEY,
  nome VARCHAR(99) NOT NULL,
  email VARCHAR(99) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  id_funcao INT,
  desc_funcao VARCHAR(99),
  in_ativo: Boolean,
);