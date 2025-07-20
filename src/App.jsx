import { useEffect, useState } from 'react';
import './App.css';
import { teams } from './teams';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="Countdown">
      <div className="CountdownHeader">
        <div className="CountdownIcon">⚡</div>
        <h2>CUENTA REGRESIVA</h2>
        <div className="CountdownSubtitle">El torneo comienza en</div>
      </div>
      <div className="TimeUnits">
        <div className="TimeUnit">
          <div className="Value">{String(timeLeft.days || 0).padStart(2, '0')}</div>
          <div className="Label">DÍAS</div>
        </div>
        <div className="TimeUnit">
          <div className="Value">{String(timeLeft.hours || 0).padStart(2, '0')}</div>
          <div className="Label">HORAS</div>
        </div>
        <div className="TimeUnit">
          <div className="Value">{String(timeLeft.minutes || 0).padStart(2, '0')}</div>
          <div className="Label">MINUTOS</div>
        </div>
        <div className="TimeUnit">
          <div className="Value">{String(timeLeft.seconds || 0).padStart(2, '0')}</div>
          <div className="Label">SEGUNDOS</div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="Stats">
      <div className="StatsGrid">
        <div className="StatCard">
          <div className="StatIcon">🏆</div>
          <div className="StatNumber">500</div>
          <div className="StatLabel">SOLES EN PREMIOS</div>
        </div>
        <div className="StatCard">
          <div className="StatIcon">👥</div>
          <div className="StatNumber">11</div>
          <div className="StatLabel">EQUIPOS REGISTRADOS</div>
        </div>
        <div className="StatCard">
          <div className="StatIcon">🎮</div>
          <div className="StatNumber">5v5</div>
          <div className="StatLabel">MODO DE JUEGO</div>
        </div>
        <div className="StatCard">
          <div className="StatIcon">🔥</div>
          <div className="StatNumber">∞</div>
          <div className="StatLabel">EMOCIONES</div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const targetDate = new Date('2025-08-23T00:00:00');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="Navigation">
        <div className="NavContainer">
          <div className="NavLogo">
            <span className="LogoIcon">⚔️</span>
            <span className="LogoText">MBL CHAMPIONSHIP 2025</span>
          </div>
          
          {/* Menú hamburguesa para móvil */}
          <button className="HamburgerMenu" onClick={toggleMenu}>
            <span className={`HamburgerLine ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`HamburgerLine ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`HamburgerLine ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          {/* Menú de navegación */}
          <div className={`NavLinks ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home" className="NavLink" onClick={closeMenu}>INICIO</a>
            <a href="#prize" className="NavLink" onClick={closeMenu}>PREMIOS</a>
            <a href="#teams" className="NavLink" onClick={closeMenu}>EQUIPOS</a>
            <a href="#schedule" className="NavLink" onClick={closeMenu}>HORARIOS</a>
            <a href="#register" className="NavLink" onClick={closeMenu}>REGISTRAR</a>
          </div>
        </div>
      </nav>

      <main className="MainContent">
        {/* Hero Section */}
        <section className="Hero" id="home">
          <div className="HeroContent">
            <div className="HeroBadge">🏆 TORNEO OFICIAL</div>
            <h1 className="HeroTitle">
              <span className="TitleLine1">MOBILE LEGENDS</span>
              <span className="TitleLine2">BANG BANG</span>
              <span className="TitleLine3">CHAMPIONSHIP 2025</span>
            </h1>
            <p className="HeroSubtitle">
              La batalla definitiva por la gloria y los premios más grandes del Perú
            </p>
            <div className="HeroButtons">
              <button className="HeroButton Primary">REGISTRAR EQUIPO</button>
              <button className="HeroButton Secondary">VER REGLAMENTO</button>
            </div>
          </div>
          <div className="HeroVisual">
            <div className="HeroGlow"></div>
            <div className="HeroParticles"></div>
          </div>
        </section>

        {/* Countdown Section - AHORA PRIMERO */}
        <Countdown targetDate={targetDate} />

        {/* Prize Section - ESTRUCTURA CONSISTENTE */}
        <section className="PrizeSection" id="prize">
          <div className="PrizeContainer">
            <div className="PrizeHeader">
              <h2 className="PrizeSectionTitle">PREMIOS DEL TORNEO</h2>
              <p className="PrizeSectionSubtitle">Los premios más grandes de la historia</p>
            </div>
            
            <div className="PrizeContent">
              <div className="PrizeInfo">
                <div className="PrizeIcon">💎</div>
                <h3 className="PrizeTitle">PREMIO TOTAL</h3>
                <div className="PrizeAmount">S/ 500</div>
                <p className="PrizeDescription">
                  El equipo campeón se llevará el premio más grande de la historia
                </p>
              </div>
              <div className="PrizeVisual">
                <div className="TrophyGlow"></div>
              </div>
            </div>
            
            <div className="PrizeBreakdown">
              <div className="PrizeItem">
                <span className="PrizePosition">🥇 1er Lugar</span>
                <span className="PrizeValue">S/ 300</span>
              </div>
              <div className="PrizeItem">
                <span className="PrizePosition">🥈 2do Lugar</span>
                <span className="PrizeValue">S/ 150</span>
              </div>
              <div className="PrizeItem">
                <span className="PrizePosition">🥉 3er Lugar</span>
                <span className="PrizeValue">S/ 50</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <Stats />

        {/* Teams Section */}
        <section className="TeamsSection" id="teams">
          <div className="SectionHeader">
            <h2 className="SectionTitle">EQUIPOS REGISTRADOS</h2>
            <p className="SectionSubtitle">Los mejores guerreros se preparan para la batalla</p>
          </div>
          
          <div className="TeamGrid">
            {teams.map((team, index) => (
              <div key={team.name} className="TeamCard">
                <div className="TeamCardHeader">
                  <div className="TeamNumber">#{String(index + 1).padStart(2, '0')}</div>
                  <div className="TeamStatus">REGISTRADO</div>
                </div>
                <div className="TeamImageContainer">
                  <img src={team.img} alt={team.name} className="TeamImage" />
                  <div className="TeamImageOverlay"></div>
                </div>
                <div className="TeamInfo">
                  <h3 className="TeamName">{team.name}</h3>
                  <div className="TeamStats">
                    <div className="TeamStat">
                      <span className="StatLabel">Ranking</span>
                      <span className="StatValue">#{index + 1}</span>
                    </div>
                    <div className="TeamStat">
                      <span className="StatLabel">Estado</span>
                      <span className="StatValue">Listo</span>
                    </div>
                  </div>
                </div>
                <div className="TeamCardGlow"></div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="CTASection">
          <div className="CTAContent">
            <h2 className="CTATitle">¿LISTO PARA LA BATALLA?</h2>
            <p className="CTASubtitle">
              Únete a la competencia más épica de Mobile Legends en Perú
            </p>
            <button className="CTAButton">REGISTRAR AHORA</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="Footer">
        <div className="FooterContent">
          <div className="FooterSection">
            <h3 className="FooterTitle">MBL CHAMPIONSHIP</h3>
            <p className="FooterDescription">
              El torneo más grande de Mobile Legends Bang Bang en Perú
            </p>
          </div>
          <div className="FooterSection">
            <h4 className="FooterSubtitle">ENLACES RÁPIDOS</h4>
            <a href="#home" className="FooterLink">Inicio</a>
            <a href="#teams" className="FooterLink">Equipos</a>
            <a href="#schedule" className="FooterLink">Horarios</a>
            <a href="#register" className="FooterLink">Registro</a>
          </div>
          <div className="FooterSection">
            <h4 className="FooterSubtitle">CONTACTO</h4>
            <p className="FooterContact">📧 info@mblchampionship.com</p>
            <p className="FooterContact">📱 +51 999 888 777</p>
          </div>
        </div>
        <div className="FooterBottom">
          <p>&copy; 2025 MBL Championship. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 