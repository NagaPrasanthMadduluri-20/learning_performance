import Container from "@/components/Container";
import React from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { getRefundPolicy } from "@/services";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Text from "@/components/Text";
import Link from "next/link";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";


export async function generateMetadata() {
  const { RefundPolicyData: getRefundPolicyData } = await getRefundPolicy();
  return generateDynamicMetadata(getRefundPolicyData);
};

const RefundPolicy = async () => {
  let getRefundPolicyData, error;
  ({ RefundPolicyData: getRefundPolicyData, error } = await getRefundPolicy());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {getRefundPolicyData && getRefundPolicyData.pageContents ? (
        <>
          <Container className="p-0">
            <BreadCrumb BreadCrumbData={getRefundPolicyData.breadcrumb} />
          </Container>
          <Container>
            <Text variant="h1">Refund Policy</Text>
            {/* <h1>{data.Heading}</h1> */}
            <Text className="mb-2 leading-7">
              Thank you for considering one of our courses.
            </Text>
            <Text className="mb-2 leading-7">
              Please note that once you purchase a course on the Invensis
              Learning website, you automatically agree to our Privacy &amp;
              Cookie Policy, Terms of Use,
              <Link
                className="text-primary dark:text-primary-foreground underline font-semibold"
                href="https://www.invensislearning.com/rescheduling-policy"
                target="_blank"
              >
                Rescheduling Policy
              </Link>
              , and Refund Policy.
            </Text>
            <Text className="mb-2 leading-7">
              The terms and conditions of our Refund Policy are as follows:
            </Text>
            <Text variant="h3" className="my-3">
              Cancellation by Invensis Learning
            </Text>
            <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                Invensis Learning reserves the right to cancel a training
                program or change the location.
              </li>
              <li>
                In case Invensis Learning cancels a training program, the
                registered attendee will receive a 100% refund. Else, as per the
                attendee's request, the same fee can be adjusted towards one of
                three upcoming training programs and no additional fee will have
                to be paid.
              </li>
            </ul>
            <Text variant="h3" className="my-3">
              Cancellation of Attendance for Classroom &amp; Online Classroom
              Training by a Registered Attendee
            </Text>
            <br />
            <br />
            <Table size="small" aria-label="a dense table">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <b>Course Includes :</b>
                  </TableHead>
                  <TableHead>
                    <b>Trainer and Location Information :</b>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Within 3 days from the date of payment made * *This will be
                    void if the training date falls anywhere between 0-14 days
                    of the training event
                  </TableCell>
                  <TableCell>100% refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    15 days or more prior to a training event
                  </TableCell>
                  <TableCell>
                    USD 200 (equivalent to local currency) processing fee will
                    be deducted
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    In between 0-14 days to a training event
                  </TableCell>
                  <TableCell>No Refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    If Invensis Learning cancels the scheduled training
                  </TableCell>
                  <TableCell>
                    We will reschedule the training at no extra cost / 100%
                    Refund
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <br />
            <br />
            <Text variant="h3" className="my-3">
              <b>Requesting a Refund</b>
            </Text>

            <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                The request must be sent via email from the email address used
                to register on our website www.invensislearning.com to buy the
                course. Please mail refund requests to
                contact@invensislearning.com
              </li>
              <li>
                {" "}
                Please state the date of purchase, name of the course and
                purchase receipt details like order ID and transaction ID in the
                email.
              </li>
              <li>
                {" "}
                All refunds will be processed within 30 days of receipt of the
                refund request.
              </li>
            </ul>
            <br />
            <Text variant="h3" className="my-3">
              <b>
                Requesting a Refund for Purchases Made from{" "}
                {/* <Link className="text-primary dark:text-primary-foreground underline font-semibold"
                  href="https://www.reed.co.uk/"
                  target="_blank"
                  rel="noopener"
                >
                  Reed.co.uk
               </Link> */}
                Invensis Learning
              </b>
            </Text>
            <Text className="mb-2 leading-7">
              Under this policy, you may cancel your purchase of the course
              within the period of 14 calendar days from the date on which the
              contract of purchase is concluded. This is called a "Cancellation
              Period". Note that if you redeem your voucher during the
              Cancellation Period, you expressly request us to begin providing
              the course materials and you acknowledge that you lose your right
              to cancel the purchase of the course and get any refund for it.
            </Text>
            <Text className="mb-2 leading-7">
              In case you decide to cancel your purchase of a course, it can be
              done in the following way:
            </Text>
            <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                By filling out this{" "}
                <Link
                  className="text-primary dark:text-primary-foreground underline font-semibold"
                  target="_blank"
                  href="https://forms.gle/oGvgq6tUjekGYTZD6"
                  rel="noopener"
                >
                  Cancellation Form
                </Link>
              </li>
            </ul>
            <Text className="mb-2 leading-7">
              Note: If you cancel the purchase of a course within 14 calendar
              days as mentioned above, we will refund you for all payments made
              as a part of your purchase within 14 calendar days from the day we
              accept that you are entitled to a refund.
            </Text>
          </Container>
        </>
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
};

export default RefundPolicy;
