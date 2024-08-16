import About from "@/components/About";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
import { getAbout, getCompanies, getHero, getProcess, getProjects, getTestimonials, getWorks } from "@/sanity/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hero"],
    queryFn: getHero
  });

  await queryClient.prefetchQuery({
    queryKey: ["bento"],
    queryFn: getAbout
  });

  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: getProjects
  });

  await queryClient.prefetchQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials
  });

  await queryClient.prefetchQuery({
    queryKey: ["companies"],
    queryFn: getCompanies
  });

  await queryClient.prefetchQuery({
    queryKey: ["works"],
    queryFn: getWorks
  });

  await queryClient.prefetchQuery({
    queryKey: ["process"],
    queryFn: getProcess
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

        <div className="max-w-7xl w-full">
          <Hero />
          <About />
          <RecentProjects />
          <Clients />
          <Experience />
          <Process />
          <Footer />
        </div>
      </main>
    </HydrationBoundary>
  );
}
