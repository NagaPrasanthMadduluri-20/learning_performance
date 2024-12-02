import Container from '@/components/Container';
import React from 'react';
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { getPrivacyPolicy} from "@/services";
import Text from "@/components/Text";
import Link from "next/link";
import { generateDynamicMetadata } from '@/lib/dynamicmetadata';

export async function generateMetadata() {
  const { PrivacyPolicyData: getPrivacyPolicyData } = await getPrivacyPolicy()
  return generateDynamicMetadata(getPrivacyPolicyData);
  };

const PrivacyPolicy = async () => {
  let getPrivacyPolicyData, error;
  ({ PrivacyPolicyData: getPrivacyPolicyData, error } = await getPrivacyPolicy());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {getPrivacyPolicyData && getPrivacyPolicyData.pageContents ? (
        <>
          <Container className="p-0">
            <BreadCrumb BreadCrumbData={getPrivacyPolicyData.breadcrumb} />
          </Container>
          <Container>
            <Text variant='h1'>Privacy Policy</Text>
            <Text className="mb-2 leading-7">Thank you for considering one of our courses.</Text>
            <Text className="mb-2 leading-7">
              Please note that once you purchase a course on the Invensis
              Learning website (www.invensislearning.com), you automatically
              agree to our Privacy &amp; Cookie Policy, Terms of Use,
              Rescheduling Policy, and Refund Policy.
            </Text>
            <Text className="mb-2 leading-7">
              If you are dissatisfied with any portion of this Site/services, or
              with any of these terms and conditions of our Privacy &amp; Cookie
              Policy, your sole and exclusive remedy is to discontinue using
              this Site/services. <br /> <br />
              The terms and conditions of our Privacy Policy are as follows:
            </Text>
            <Text variant="h3" className="my-3">Collection of Information</Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                Invensis Learning (also referred to as “we” and “our”) collects
                information from you when you register to buy a course on our
                site, make payment for an order or fill out a form.
              </li>
              <li>
                {" "}
                You may be asked to share the following information in the
                above-mentioned circumstances: name, e-mail address, mailing
                address, phone number, company, and credit card/debit card/bank
                information.
              </li>
            </ul>
            <Text variant="h3" className="my-3">Purpose of Collecting Information</Text>
            <Text className="mb-2 leading-7">
              The information that we collect from you may be used for any of
              the following reasons:
            </Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                To improve our website’s offerings Your information and feedback
                will enable us to improve the offerings on our website and the
                user experience.
              </li>
              <li>
                {" "}
                To enhance customer service Your information will enable us to
                service your requirements better as well as provide better
                support.
              </li>
              <li>
                {" "}
                To process payments Your information will enable us to process
                transactions that you initiate on the website.
              </li>
              <li>
                {" "}
                To send periodic updates through email Your information will
                enable us to mail you your order-related details and keep you
                informed about your training program, other updates, company and
                service information and so on.
              </li>
            </ul>
            <Text variant="h3" className="my-3">Confidentiality of Your Information</Text>
            <Text className="mb-2 leading-7">
              A number of stringent security measures are employed by us to
              ensure the safety and privacy of the information that you share
              with us:
            </Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                We use a secure server during the process of payment for a
                transaction.
              </li>
              <li>
                {" "}
                For transactions or placing an order through a payment gateway,
                Secure Socket Layer (SSL) technology is used to transmit all
                sensitive user information. This makes the online transmission
                100% safe, secure, confidential, and convenient.&nbsp;
              </li>
              <li>
                {" "}
                This information, once transmitted, is encrypted into our
                payment gateway provider’s database.
              </li>
              <li>
                {" "}
                Only authorized personnel with special access rights to the
                system can view this information and they are mandated to keep
                the information confidential.
              </li>
            </ul>
            <Text variant="h3" className="my-3">Disclosure of Information</Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                Without your consent, your information, whether private or
                public, will not be sold, transferred, exchanged or provided to
                any other company for any reason whatsoever, other than for the
                express purpose of delivering the ordered product or service.
              </li>
              <li>
                {" "}
                The previous point does not include or extend to trusted third
                parties who aid us in our website operations, the conducting of
                our business and customer service, so long as the third parties
                agree to maintain the confidentiality of your information.
              </li>
              <li>
                {" "}
                We also reserve the right in our discretion to release your
                information to comply with the law, enforce our site policies,
                or protect our own rights, property or safety or that of others.
              </li>
            </ul>
            <Text variant="h3" className="my-3">Collection of Cookies</Text>
            <Text className="mb-2 leading-7">
              Cookies are small files that a website or a service provider
              transfers to the hard drive of your computer through your web
              browser, with your permission. They enable the website or service
              provider to recognize your browser and capture and remember
              certain data.
            </Text>
            <Text className="mb-2 leading-7">Invensis Learning uses cookies for the following reasons:</Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                To help us remember and process the items in your shopping cart
              </li>
              <li>
                {" "}
                To compile data about site traffic and interactions for
                enhancing our website offerings and customer service
              </li>
            </ul>
            <Text variant="h3" className="my-3">Online Privacy Policy Only</Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                This online privacy policy is applicable solely for information
                collected through our website. It does not extend to information
                collected offline.
              </li>
            </ul>
            <Text variant="h3" className="my-3">Changes to Our Privacy &amp; Cookie Policy</Text>
             <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
              <li>
                {" "}
                Invensis Learning reserves the right to modify our Privacy &amp;
                Cookie Policy, without prior notice. Any changes will be made on
                this page.
              </li>
              <li>
                {" "}
                This policy was last modified at 3 pm IST on Wednesday, January
                02, 2019.
              </li>
            </ul>
            <Text variant="h3" className="my-3">Contacting Us</Text>
            <Text className="mb-2 leading-7">
              If there are any questions regarding this privacy policy, you may
              contact us using the&nbsp;information below:
            </Text>
            <Text className="mb-2 leading-7">
              USA
              <br />
              <span>Invensis Inc.,</span>
              <br /> 1000 N West Street, Suite 1200, Wilmington, <br /> DE 19801
            </Text>
            <Text className="mb-2 leading-7">
            INDIA
              <br />
              Invensis Learning Pvt Ltd &nbsp;
              <br /> 1321, Sarakki Extension,100 feet ring road,
              <br /> Marenahalli,&nbsp;
              <br />  2nd phase J P Nagar,&nbsp;
              <br /> Bangalore - 560078&nbsp;
              <br /> E-mail: contact@invensislearning.com
              <br /> Website: <a style={{color:"inherit",textDecoration:"none"}} href="https://www.invensislearning.com/">
                https://www.invensislearning.com/
              </a> 

              
            </Text>
          </Container>
        </>
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
