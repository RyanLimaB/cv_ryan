var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* Hello world */}
        {/*metadados*/}
        <meta charSet="utf-8" />
        <meta name="author" content="desenvolvido por Ryan Lima" />
        <meta name="description" content="curriculo vitae de Ryan lima, apresentando seus projetos e aplicações na area de informatica." />
        <meta name="keyword" content="cv,ryan,curriculo,vitae,informatica,programação,web designer,computador" />
        <meta name="viewport" content="width=device-width,inicial-scale=1.0" />
        {/*links*/}
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="shortcut icon" href="img/icon.png" />
        <link rel="stylesheet" href="css/font.css" />
        <link rel="stylesheet" href="css/largura.css" />
        {/*titulo da página*/}
        <title>Curriculo vitae| Ryan Lima</title>
        {/*conteiner da pagina*/}
        <div className="w3-content w3-margin-top">
          {/*Grid da pagina*/}
          <div className="w3-row-padding">
            {/*coluna da esquerda*/}
            <div className="w3-third">
              {/*bloco da esquerda*/}
              <div className="w3-white text-grey w3-grid-4">
                {/*display da imagem*/}
                <div className="w3-display-container">
                  {/*imagem do perfil*/}
                  <img src="img/perfil.jpg" alt="Ryan Lima" className="larg-img-perfil" />
                  {/*nome do perfil*/}
                  <div className="w3-display-bottomleft w3-container w3-text-teal">
                    <h2>Ryan Lima</h2>
                  </div>
                </div>
                {/*conteudo da esquerda*/}
                <div className="w3-container">
                  {/*profissão*/}
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />mecanico de manutenção, estudante de informatica</p>
                  {/*endereço*/}
                  <p><i className="fa fa-home fa-fw-w3-margin-right w3-large w3-text-teal" />Itu-SP, Brasil</p>
                  {/*email*/}
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />ryanbulga@gmail.com</p>
                  {/*telefone*/}
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />11961983268</p>
                  {/*habilidades*/}
                  <p className="w3 large">
                    <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-large w3-text-teal" />habilidades</b>
                  </p>
                  {/*1° Habilidade*/}
                  <p>adobe photoshop</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal primeira-habilidade">60%</div>
                  </div>
                  {/*2° Habilidade*/}
                  <p>adobe illustrator</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal segunda-habilidade">75%</div>
                  </div>
                  {/*3° Habilidade*/}
                  <p>adobe photoshop</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal terceira-habilidade">55%</div>
                  </div>
                  {/*4° Habilidade*/}
                  <p>adobe photoshop</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal quarta-habilidade">50%</div>
                  </div>
                  {/*idiomas*/}
                  <p className="w3 large">
                    <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-large w3-text-teal" />idiomas</b>
                  </p>
                  {/*1ºidioma*/}
                  <p>inglês</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal primeiro-idioma">75%</div>
                  </div>
                  {/*2ºidioma*/}
                  <p>espanhol</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal segundo-idioma">40%</div>
                  </div>
                  {/*3ºidioma*/}
                  <p>português</p>
                  {/*barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal terceiro-idioma">100%</div>
                  </div>
                </div>
              </div>
            </div>
            {/*coluna da direita*/}
            <div className="w3-twothird">{/*bloco da direita*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*experiências*/}
                <h2 className="w3-text-grey w3-padding-16">
                  {/*icone experiências*/}
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Experiências
                </h2>
                {/*container experiencias*/}
                <div className="w3-container">
                  <h5><b>menor aprendiz | mangotex</b></h5>
                  <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                    fev-2022
                    <span className="w3-round w3-tag w3-teal">Atualmente</span>
                  </h6>
                  <p>reparos mecanicos na area industrial;montagem e desenvolvimento de sistemas pneumaticos;ajustes mecanicos em maquinas rotativas(eixo-rolamento-correia etc);conhecimento em extrusoras,tampograficas,bambury,trançadeiras, motores e bombas no geral. experiencia:industrias mangotex ltda./senai italo bologna</p>
                  {/*container experiencias*/}
                  <div className="w3-container">
                    <h5><b>mecanico de manutenção | mangotex</b></h5>
                    <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                      fev-2022
                      <span className="w3-round w3-tag w3-teal">Atualmente</span>
                    </h6>
                    <p>manutenção em maquinas no geral</p>
                  </div>
                  {/*bloco educação*/}
                  <div className="w3-content w3-card w3-white w3-margin-bottom">
                    {/*educação*/}
                    <h2 className="w3-container w3-text-grey w3-padding-16" <!--icone educação-->
                      <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                      educação
                    </h2>
                    {/*container educação*/}
                    <h5><b>mecanico de manutenção | senai</b></h5>
                    <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                      fev-2022
                      <span className="w3-round w3-tag w3-teal">cursando</span>
                      {/*container educação*/}
                    </h6><h5><b>  Ensino fundamental|Anthenor fruet</b></h5>
                    <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                      2017-2020
                      {/*container educação*/}
                    </h6><h5><b>  inglês|microcamp</b></h5>
                    <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                      2018-2020
                      {/*container educação*/}
                    </h6><h5><b> Ensino médio|Anthenor fruet</b></h5>
                    <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                      2021							
                      <span className="w3-round w3-tag w3-teal">cursando</span>
                      {/*container educação*/}
                    </h6><h5><b> informática|microcamp</b></h5>
                    <h6><i className="fa fa-calendar fa-fw w3-text-teal" />
                      2020							
                      <span className="w3-round w3-tag w3-teal">cursando</span>
                    </h6></div>
                </div>
              </div>	
              <div className="awesome" style={{border: '1px solid red'}}>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" />
              </div>
              <p>Enter your HTML here</p>
            </div></div></div></div>
    );
  }
});