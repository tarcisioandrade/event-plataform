import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="p-4 bg-black border-t border-gray-500" >
      <div className="max-w-[1100px] flex items-center justify-between mx-auto md:flex-col">
        <div className="flex items-center gap-9 md:flex-col">
          <LogoFooter />
          <p className="text-sm text-gray-400">Rocketseat - Todos os direitos reservados</p>
        </div>
        <p className="text-sm text-gray-400 md:mt-9">Políticas de privacidade</p>
      </div>
    </footer>
  );
};

export default Footer;
