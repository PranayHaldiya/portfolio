import Container from '@/components/common/Container';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Projects from '@/components/landing/Projects';
import Stack from '@/components/landing/Stack';

export default function Home() {
  return (
    <Container className="flex flex-col gap-14 pb-6">
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Github />
    </Container>
  );
}
