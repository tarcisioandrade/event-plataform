import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Logo } from "../components/Logo";
import {
  useCreateSubscriberMutation,
  usePublishSubscriberMutation,
} from "../graphql/generated";
import { setLocalStore } from "../helper/useLocalStore";
import ReactMockup from "/src/imgs/code-mockup.png";
import MobileReactMockup from "/src/imgs/mobile-code-mockup.png";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [createSubscriber, { loading: loadingCreate }] =
    useCreateSubscriberMutation();

  const [publishSubscriber, { loading: loadingPublish }] =
    usePublishSubscriberMutation();

  const loading = loadingPublish || loadingCreate;

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();

    const { data }: any = await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    const { data: dataPublish }: any = await publishSubscriber({
      variables: {
        email: data.createSubscriber.email,
      },
    });

    if (dataPublish.publishSubscriber.id) {
      const setID = setLocalStore("id", dataPublish.publishSubscriber.id);
      if (setID) navigate("/event");
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat">
      <div className="flex flex-col items-center bg-reactMockup bg-top bg-no-repeat w-full max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mt-20 w-full md:flex-col">
          <div className="max-w-[640px] md:max-w-full md:px-4 md:flex md:flex-col md:items-center md:text-center">
            <Logo />
            <h1 className="mt-8 text-[2.5rem] leading-tight md:text-3xl">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React JS</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed md:text-sm">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded md:mt-10 sm:w-full">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full "
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={({ target }) => setName(target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={({ target }) => setEmail(target.value)}
              />
              <button
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                type="submit"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        <picture>
          <source srcSet={MobileReactMockup} media="(max-width: 767px)" />
          <img src={ReactMockup} alt="mockup" className="mt-4" />
        </picture>
      </div>
      <Footer />
    </div>
  );
};

export default Subscribe;
