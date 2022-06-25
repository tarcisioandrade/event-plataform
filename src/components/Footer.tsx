import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="p-4 bg-black border-t border-gray-500" >
      <div className="max-w-[1100px] flex items-center justify-between mx-auto">
        <div className="flex items-center gap-9">
          <LogoFooter />
          <p className="text-sm text-gray-400">Rocketseat - Todos os direitos reservados</p>
        </div>
        <p className="text-sm text-gray-400">Políticas de privacidade</p>
      </div>
    </footer>
  );
};

export default Footer;
