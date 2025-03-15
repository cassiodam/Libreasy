from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Caminho para as planilhas
LIVROS_XLSX = "livros.xlsx"
USUARIOS_XLSX = "usuarios.xlsx"

# Função para carregar dados da planilha
def carregar_dados(arquivo):
    try:
        return pd.read_excel(arquivo)
    except FileNotFoundError:
        return pd.DataFrame()

# Função para salvar dados na planilha
def salvar_dados(arquivo, dados):
    dados.to_excel(arquivo, index=False)

# Rota para adicionar livro
@app.route("/adicionar_livro", methods=["POST"])
def adicionar_livro():
    dados = request.json
    livros = carregar_dados(LIVROS_XLSX)
    novo_livro = pd.DataFrame([dados])
    livros = pd.concat([livros, novo_livro], ignore_index=True)
    salvar_dados(LIVROS_XLSX, livros)
    return jsonify({"mensagem": "Livro adicionado com sucesso!"})

# Rota para listar livros
@app.route("/listar_livros", methods=["GET"])
def listar_livros():
    livros = carregar_dados(LIVROS_XLSX)
    return jsonify(livros.to_dict(orient="records"))

# Rota para autenticar usuário
@app.route("/login", methods=["POST"])
def login():
    dados = request.json
    usuarios = carregar_dados(USUARIOS_XLSX)
    usuario = usuarios[(usuarios["email"] == dados["email"]) & (usuarios["senha"] == dados["senha"])]
    if not usuario.empty:
        return jsonify({"tipo": usuario.iloc[0]["tipo"], "mensagem": "Login bem-sucedido!"})
    return jsonify({"mensagem": "E-mail ou senha inválidos!"}), 401

if __name__ == "__main__":
    app.run(debug=True)