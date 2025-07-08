
import Image from "next/image";
import AnimatedWriting from "@/components/AnimatedWriting";
import ListingCard from "../components/ListingCard"
import Caresoul from "@/components/HomeCaresoul";
import FeatureProduct from "@/components/FeatureProduct";

export default function Home() {
  return (
   <div className="p-8">
      <AnimatedWriting
        imageSrc="/leepi_english_logo.jpg"
        text="Welcome to our creative studio – where design meets emotion"
      />
      <Caresoul/>
      <FeatureProduct/>
      {/* <ListingCard
          header="Flex Banners"
          description="Order Customized Flex Banners in Seconds!"
          bgcolour="from-white to-blue-400"
          imgSource={'leepi_hindi_logo_trimmed.jpg'}
          isImageRight={false}
        />
        <ListingCard
          header="Custom Photo Frames"
          description="2-3-4 - Choose as many as you'd like"
          bgcolour="from-white to-yellow-400"
          imgSource={'leepi_english_logo.jpg'}
          isImageRight={true}
        /> */}
    </div>
  );
}
