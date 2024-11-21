import { draftMode } from "next/headers";
import { getGlobalContent } from "@/lib/api";

import Header from "@/components/Header";
import FeaturedProjects from "@/components/FeaturedProjects";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WaysOfWorking from "@/components/WaysOfWorking";
import FixedBanner from "@/components/EditBanner";
import Footer from "@/components/Footer";
import { revalidateTag } from "next/cache";

export default async function Page() {
  const { isEnabled } = await draftMode();
  const data = await getGlobalContent();

  revalidateTag("home");

  return (
    <>
      <FixedBanner isEnabled={isEnabled} message="Preview Mode" />

      <div className="min-h-screen mt-16 gap-y-16 w-full flex flex-col">
        <Header title={data.title} />
        <Intro tagline={data.homeTagline} intro={data.introduction.json} />
        <FeaturedProjects projects={data.featuredProjectsCollection.items} />
        <Projects projects={data.projectsCollection.items} />
        <Services
          heading={data.servicesHeading}
          intro={data.servicesIntroduction}
          services={data.servicesCollection.items}
        />
        <WaysOfWorking
          header={data.waysOfWorkingHeader}
          intro={data.waysOfWorkingIntroduction}
          ways={data.waysOfWorkingCollection.items}
        />
        <Footer content={data.footer.json} />
      </div>
    </>
  );
}
