import Text from "@/components/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormFields from "./FormFields";
const EnquiryForm = ({ defaultcoursename, CorporateTraining }) => {
  return (
    <div
      className={`bg-background shadow-lg border-2 border-gray-300 px-6 md:px-40 md:py-16 `}
      id="inquireform"
    >
      <Text
        variant="h2"
        className="text-blue-600 !text-[35px] text-center mb-7"
      >
        Request for Training
      </Text>
      <Tabs defaultValue={`${CorporateTraining ? "corporate" : "Individual"}`} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-primary text-primary-foreground h-auto">
          <TabsTrigger value="Individual" className="whitespace-normal">
            I Am an Induviduial
          </TabsTrigger>
          <TabsTrigger value="corporate" className="whitespace-normal">
            Corporate Group Training
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Individual">
          <FormFields key="individual" formType="Individual" isIndividual={true} defaultselectcourse={defaultcoursename?.page_name} />
        </TabsContent>
        <TabsContent value="corporate">
          <FormFields  key="corporate" formType="Corporate" isIndividual={false} defaultselectcourse={defaultcoursename?.page_name}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnquiryForm;
