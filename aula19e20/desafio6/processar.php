<?php
// Define o cabeçalho para garantir que caracteres especiais (como ç, ã) funcionem
header('Content-Type: text/html; charset=utf-8');

// Verifica se o formulário foi enviado usando o método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Campos de texto simples (Nome, Email, Data, Bio)
    // Usamos htmlspecialchars() para prevenir ataques XSS (exibir HTML/scripts)
    $nome = htmlspecialchars($_POST['nome_usuario']);
    $email = htmlspecialchars($_POST['email_usuario']);
    $data_nasc = htmlspecialchars($_POST['data_nasc']);
    $bio = htmlspecialchars($_POST['biografia_usuario']);

    // 2. Senha (CUIDADO!)
    // NUNCA exiba ou armazene uma senha em texto puro como aqui.
    // Em um app real, você usaria password_hash()
    $senha_crua = $_POST['senha_usuario']; // Apenas para este exemplo


    // 3. Campo de Rádio (Gênero)
    $genero_texto = "Não informado"; // Valor padrão
    if (isset($_POST['genero'])) {
        $genero_valor = $_POST['genero'];
        
        // Converte o valor (m, f, o) em texto legível
        if ($genero_valor == 'm') {
            $genero_texto = "Masculino";
        } elseif ($genero_valor == 'f') {
            $genero_texto = "Feminino";
        } elseif ($genero_valor == 'o') {
            
            // SE FOR 'o', BUSCA O VALOR DO CAMPO DE TEXTO
            if (isset($_POST['genero_outro_texto']) && !empty($_POST['genero_outro_texto'])) {
                // Pega o texto e limpa (segurança)
                $outro_especificado = htmlspecialchars($_POST['genero_outro_texto']);
                $genero_texto = "Outro: " . $outro_especificado;
            } else {
                $genero_texto = "Outro (não especificado)";
            }
        }
    }

    // 4. Checkbox (Termos)
    // Se um checkbox NÃO for marcado, ele simplesmente NÃO é enviado.
    // Então, verificamos se a chave 'aceitou_termos' existe no $_POST
    $termos_texto = "NÃO aceitou";
    if (isset($_POST['aceitou_termos'])) {
        // O valor padrão de um checkbox marcado (sem atributo 'value') é "on"
        $termos_texto = "Sim, aceitou (Valor: " . htmlspecialchars($_POST['aceitou_termos']) . ")";
    }

    // --- Exibindo todos os dados recebidos ---
    
    echo "<h1>Cadastro Recebido com Sucesso (via PHP)</h1>";
    echo "<p><strong>Nome Completo:</strong> $nome</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Data de Nasc.:</strong> $data_nasc</p>";
    echo "<p><strong>Gênero:</strong> $genero_texto</p>";
    echo "<p><strong>Biografia:</strong> $bio</p>";
    echo "<p><strong>Aceitou os Termos:</strong> $termos_texto</p>";

    echo "<hr>";
    echo "<h3 style='color: red;'>⚠️ AVISO DE SEGURANÇA ⚠️</h3>";
    echo "<p>A senha digitada foi: <strong>" . htmlspecialchars($senha_crua) . "</strong></p>";
    echo "<p>Em um site real, NUNCA exiba a senha. Use <strong>password_hash()</strong> para salvá-la no banco de dados.</p>";


} else {
    // Se alguém tentar acessar o processar.php diretamente pelo navegador
    echo "<h1>Acesso Inválido</h1>";
    echo "<p>Por favor, preencha o formulário de cadastro primeiro.</p>";
}

?>  