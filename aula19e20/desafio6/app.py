from flask import Flask, request

# Cria a aplicação
app = Flask(__name__)

# --- Rota de Teste ---
# Esta é uma nova rota para você testar no navegador
@app.route('/')
def hello():
    return "<h1>Olá, Mundo!</h1><p>Meu servidor Flask está rodando no VS Code!</p>"


# --- Rota do Formulário ---
# Esta é a rota que seu formulário HTML vai usar
@app.route('/processar', methods=['POST'])
def processar_dados():
    try:
        # Pega os dados do formulário
        nome = request.form['nome_usuario'] 
        email = request.form['email_usuario']
        
        # Retorna uma resposta
        return f"""
        <h1>Dados Recebidos via Python (Flask)</h1>
        <p>Obrigado, <b>{nome}</b>!</p>
        <p>Seu email é: {email}</p>
        """
    except Exception as e:
        return f"Ocorreu um erro: {e}. Verifique se os 'name' do formulário estão corretos."

# Roda o servidor
if __name__ == '__main__':
    app.run(debug=True)