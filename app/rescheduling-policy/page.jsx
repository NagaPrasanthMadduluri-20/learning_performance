import Container from "@/components/Container";
import Text from "@/components/Text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getReschedulingPolicy } from "@/services";
import React from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templateMapping = {
  ReschedulingPolicy: ({ content, globaldata }) => (
    <>
    <Container className="p-0">
        <BreadCrumb BreadCrumbData={globaldata.breadcrumb} />
      </Container>
    <Container>
      <Text variant="h1" className="mb-5">
        Rescheduling Policy
      </Text>
      <Text className="mb-2 leading-7">
        Thank you for considering one of our courses.
      </Text>
      <Text className="mb-2 leading-7">
        Please note that once you purchase a course on the Invensis Learning
        website, you automatically agree to our Privacy &amp; Cookie Policy,
        Terms of Use, Rescheduling Policy, and Refund Policy.
      </Text>

      <Text className="mb-2 leading-7">
        The terms and conditions of our Rescheduling Policy are as follows:
      </Text>

      <Text variant="h3" className="my-3">
        Rescheduling of a Training Event by Invensis Learning
      </Text>
      <Text className="mb-2 leading-7">
        Invensis Learning reserves the right to reschedule the date and time of
        a training program. &nbsp; In case Invensis Learning
        reschedules/postpones a training event, the options available to a
        registered attendee are:
      </Text>

      <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
        <li>
          100% refund will be made to the registered attendee, if the
          rescheduled dates do not fit in with his/her schedule. Refunds are
          made within 30 days of receiving a request for refund.
        </li>
        <li>
          The registered attendee can choose to attend another training class
          scheduled on a more convenient date in the future, at any scheduled
          location in the country in which he/she had originally enrolled. At
          the time of rescheduling, he or she should inform Invensis Learning of
          availing this option. Advance intimation of 7 days prior to
          commencement of the upcoming course has to be given. The paid up fee
          will be adjusted for that course.
        </li>
        <li>
          {" "}
          The registered attendee can nominate a replacement in the rescheduled
          class. However, this nomination should be intimated to Invensis
          Learning at least 3 days prior to the rescheduled event 's new date.
        </li>
      </ul>

      <Text variant="h3" className="my-3">
        Rescheduling by a Registered Attendee
      </Text>

      <Text className="mb-2 leading-7">
        If due to unforeseen reasons, a registered attendee wishes to
        reschedule/postpone his or her attendance to a future date, rescheduling
        fees will be charged as mentioned below.&nbsp;
      </Text>

      <Table size="small" aria-label="a dense table" className="my-5">
        <TableHeader>
          <TableRow>
            <TableHead>
              <b>Rescheduling Date</b>
            </TableHead>
            <TableHead>
              <b>Rescheduling Fee</b>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              7 or more days prior to the date of the original class
            </TableCell>
            <TableCell>
              10% of the registration fee of the upcoming class
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              5 days prior to the date of the original class
            </TableCell>
            <TableCell>
              50% of the registration fee of the upcoming class
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              3 days prior to the date of the original class
            </TableCell>
            <TableCell>
              75% of the registration fee of the upcoming class
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Less than 3 days prior to the date of the original class
            </TableCell>
            <TableCell>No rescheduling allowed</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Text className="mb-2 leading-7">
        The rescheduled course should be within a three-month period from the
        date of the original class.
      </Text>
      <Text className="mb-2 leading-7">
        Please note that any request to attend an upcoming course as part of the
        rescheduling arrangement should be sent at least 7 days prior to
        commencement of the upcoming course.
      </Text>

      <Text variant="h3" className="my-3">
        Rescheduling Procedure
      </Text>

      <Text className="mb-2 leading-7">
        The request must be sent via email from the email address used to
        register on our website www.invensislearning.com to buy the course.
        Please mail rescheduling or refund requests to
        contact@invensislearning.com.
      </Text>

      <Text className="mb-2 leading-7">
        Please state the date of purchase, name of the course and purchase
        receipt details like order ID and transaction ID in the email.&nbsp;{" "}
        <span>
          Please note that rescheduling is subject to availability of seats.
        </span>
      </Text>
    </Container>
    </>
  ),
};

export async function generateMetadata() {
  const { ReschedulingPolicyData: getReschedulingPolicyData } = await getReschedulingPolicy();
  const slug = getReschedulingPolicyData.page_slug;
  return generateDynamicMetadata(getReschedulingPolicyData, null, slug);
};

const ReschedulingPolicy = async () => {
  let getReschedulingPolicyData, error;
  ({ ReschedulingPolicyData: getReschedulingPolicyData, error } =
    await getReschedulingPolicy());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getReschedulingPolicyData;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent
        content={content}
        globaldata={getReschedulingPolicyData}
      />
    ) : null;
  };

  const renderContent = (contentArray) => {
    return contentArray.map((content, index) => (
      <div key={index}>{renderTemplate(content.template, content)}</div>
    ));
  };

  return (
    <div>
      {getReschedulingPolicyData && getReschedulingPolicyData.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
};

export default ReschedulingPolicy;
