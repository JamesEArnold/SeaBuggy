import { ButtonToContainer } from './components/ButtonToContainer';

export default function Home() {
  return (
    <main className="container flex justify-center items-center mx-auto my-auto h-full min-h-screen">
      <ButtonToContainer>
        <p>Hello</p>
      </ButtonToContainer>
    </main>
  );
}
