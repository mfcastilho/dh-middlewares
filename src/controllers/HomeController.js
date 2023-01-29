

const HomeController = {
  showHome:(req, res)=>{
    res.send("Página Home!");
  },
  showRegister:(req, res)=>{
    res.send("Página de Cadastro!");
  },
  showLogin:(req, res)=>{
    res.send("Página de Login!");
  },
  showAdminPage:(req, res)=>{
    res.send(`Olá Admin: ${req.query.user}`);
  }
}

module.exports = HomeController;