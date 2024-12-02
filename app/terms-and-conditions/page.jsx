import Container from "@/components/Container";
import { getTermsandconditions } from "@/services";
import React from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Text from "@/components/Text";
import Link from "next/link";
import { generateDynamicMetadata } from "@/lib/dynamicmetadata";

const templateMapping = {
  TermsAndConditions: ({ content, globaldata }) => (
    <>
      <Container className="p-0">
        <BreadCrumb BreadCrumbData={globaldata.breadcrumb} />
      </Container>
      <Container>
        <Text variant="h1" className="mb-5">Terms and Conditions</Text>

        <Text className="leading-7 mb-2">
          This Website and the information, tools and material contained in it
          (this "Site") are not directed to, or intended for distribution to or
          use by, any person or entity who is a citizen or resident of or
          located in any jurisdiction where such distribution, publication,
          availability or use would be contrary to law or regulation or which
          would subject Invensis Learning or its affiliates to any registration
          or licensing requirement within such jurisdiction.
        </Text>
        <Text className="leading-7 mb-2">
          This Site is subject to periodic updates and revision. Materials
          should only be considered current as of the date of initial
          publication appearing thereon, without regard to the date on which you
          may access the information. Invensis Learning maintains the right to
          delete or modify information on this Site without prior notice.
        </Text>

        <Text className="leading-7 mb-2">
          'You' refers to user or a paying customer. If you are a company or
          another person who gives access to company products, you agree to take
          responsibility in full in case of damages or indemnification that
          could properly lie against the customer.
        </Text>
        <Text className="leading-7 mb-2">
          The Invensis Learning website (the "Site"), the educational services
          made available through the Site and the content (the "Products") are
          owned, operated and maintained, as applicable, by Invensis Learning
          ("we", "our", "us", or the "Company"). The Site, Products and Content
          are, collectively, the "Company Products".
        </Text>
        <Text className="leading-7 mb-2">By</Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            Using or accessing the Company Products, including, but not limited
            to downloading or accessing
          </li>
          <li>
            offering a Course through the Site or through Software; you agree to
            the terms and conditions set forth in these Terms and Conditions
            (the "Terms")
          </li>
        </ul>
        <Text className="leading-7 mb-2">
          By using this Site or its Products and Services, you agree and warrant
          that you have read, understood, and agree to be bound by these terms.
          The Company's privacy policy can be found at{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="/privacy-policy">
            Privacy Policy
          </Link>
          . If you do not accept these Terms, you must not use - and are not
          authorized to use - all or any portion of the Company's website and
          its products or services (as defined below).
        </Text>
        <br />
        <Text variant="h3" className="my-3">You agree not to:</Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            Interrupt or attempt to interrupt the operation of the Site in any
            way.
          </li>
          <li>Intrude or attempt to intrude into the Site in any way.</li>
          <li>
            Post any obscene, defamatory or annoying materials on the Site.
          </li>
          <li>
            Obscure any materials, including this notice, already posted on the
            Site.
          </li>
          <li>
            Use the Site or any of its contents thereof to defame, intimidate,
            annoy or otherwise cause a nuisance, or breach the rights of any
            person.
          </li>
          <li>Edit HTML source code, reverse engineer or attempt to hack.</li>
          <li>
            Run spam services/scripts or anything which could affect
            infrastructure, and in turn, users.
          </li>
          <li>
            Communicate spam, advertise or sell services such as digital
            downloads, e-books or phishing links.
          </li>
        </ul>
        <Text className="leading-7 mb-2">
          The information, material or services included in or available through
          this Site may include inaccuracies or typographical errors. Changes
          are periodically made to the Site /services and to the information
          therein. Invensis Learning and/or its respective suppliers may make
          improvements and/or changes in the Site/services at any time. Advice
          received via this site should not be relied upon for personal,
          medical, legal or financial decisions and you should consult an
          appropriate professional for specific advice tailored to your
          situation.
        </Text>
        <Text className="leading-7 mb-2">
          You specifically agree that Invensis Learning shall not be responsible
          for unauthorized access to or alteration of your transmissions or
          data, any material or data sent or received or not sent or received,
          or any transactions entered into through this Site. You specifically
          agree that Invensis Learning is not responsible or liable for any
          threatening, defamatory, obscene, offensive or illegal content or
          conduct of any other party or any infringement of another's rights,
          including Intellectual Property Rights (IPR). You specifically agree
          that Invensis Learning is not responsible for any content sent using
          and/or included in this Site by any third party.
        </Text>
        <Text className="leading-7 mb-2">
          In no event shall Invensis Learning and/or its suppliers be liable for
          any direct, indirect, punitive, incidental, special, consequential
          damages or any damages whatsoever including, without limitation,
          damages for loss of use, data or profits, arising out of or in any way
          connected with the use or performance of this Site / services, with
          the delay or inability to use this Site/services or related services,
          the provision of or failure to provide services, or for any
          information, products, services and material obtained through this
          Site, or otherwise arising out of the use of this Site /services,
          whether based on contract, tort, negligence, strict liability or
          otherwise, even if Invensis Learning or any of its suppliers has been
          advised of the possibility of damages. If you are dissatisfied with
          any portion of this Site/services, or with any of these Terms and
          Conditions, your sole and exclusive remedy is to discontinue using
          this Site/services.
        </Text>
        <br />
        <Text variant="h3" className="my-3">Site Content</Text>
        <Text className="leading-7 mb-2">
          Invensis Learning authorizes users to view and download the
          information ("Materials") at this website ("Site") only for personal,
          non-commercial use.
        </Text>
        <Text className="leading-7 mb-2">
          This authorization is not a transfer of title in the Materials and
          copies of the Materials and is subject to the following restrictions:
        </Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            You must retain all copyright, trademarks and other proprietary
            notices contained in the Materials on all copies of the &nbsp;
            &nbsp; Materials downloaded
          </li>
          <li>
            You must not modify the Materials in any way nor reproduce or
            display, perform, or distribute or otherwise use them for any public
            or commercial purpose
          </li>
          <li>
            You must not transfer the Materials to any other person unless you
            give them notice of, and they agree to accept, the obligations
            arising under these Terms and Conditions of Use.&nbsp;
            <br /> <br /> You agree to abide by all additional restrictions
            displayed on the Site as it may be updated from time to time. This
            Site, including all Materials, is copyrighted and protected by
            worldwide copyright laws and treaty provisions. You agree to comply
            with all copyright laws worldwide in your use of this Site and to
            prevent any unauthorized copying of the Materials. Except as
            expressly provided herein, Invensis Learning does not grant any
            express or implied right to you under any patents, trademarks,
            copyrights or trade secret information.
          </li>
        </ul>
        <Text variant="h3" className="my-3">Course Content&nbsp;</Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            All Course Content (also referred to as "Study Material") provided
            by Invensis Learning is proprietary information. No portion of it
            may be reproduced or used for any commercial purpose whatsoever.
          </li>
          <li>
            For all Live Online Classroom trainings only soft copy of the
            respective course study guide will be provided. If at all the
            participant requires the hard copy of the course study guide, he /
            she will be charged USD 125 for the same
          </li>
        </ul>
        <Text variant="h3" className="my-3">Minimum System configuration for all Online trainings&nbsp;</Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li> Processor: 2 GHz</li>
          <li>Operating System: Windows 7/8/10 or Mac</li>
          <li>Memory: 2 GB RAM</li>
          <li>Hard Disk: 250 MB free space</li>
          <li>Display: 1024X768, 24 bits</li>
          <li>Headphones / Ear phones / Speakers</li>
          <li>Internal or external Mic</li>
          <li>Zoom/Citrix, GotoMeeting software</li>
          <li>Microsoft PPT, Word, Excel, Adobe PDF reader</li>
          <li>Internet Bandwidth: 2Mbps</li>
          <li>Back-up power source if there is any power outage</li>
        </ul>

        <Text variant="h3" className="my-3">Transactions</Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            You are required to pay for a{" "}
            <b>4% processing fee on every transaction</b> that you make on the
            Invensis Learning website.
          </li>
          <li>
            Double check your payment details before confirming a transaction –
            these will include the total bill amount, processing fees, taxes, if
            any, shipping costs, if any and discounts, if any.
          </li>

          <li>
            Invensis Learning makes no warranties of any kind, expressed or
            implied, with respect to any products or services sold on or through{" "}
            <b>this</b> Site.
          </li>
          <li>
            No different or additional terms contained in any purchase order,
            document, transmission or other communication shall be binding upon
            Invensis Learning, unless agreed to by us in writing.
          </li>
          <li>
            Without prior notice and in its sole discretion, Invensis Learning
            reserves the right to modify and/or limit the order quantity on any
            item and to refuse service to anyone.
          </li>
        </ul>
        <Text variant="h3" className="my-3">Pricing Disclaimer</Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            Invensis Learning reserves the right to change prices for all our
            products, offers or deals. However, the price you paid at the time
            of purchase will be valid for you.
          </li>
        </ul>
        <Text variant="h3" className="my-3">Invoicing Policy</Text>
        <Text className="leading-7 mb-2">
          In order to provide optimum products and services to customers, they
          may be billed through Invensis Learning’s Invoicing tool.
        </Text>
        <Text className="leading-7 mb-2">
          The following are the terms and conditions that govern our Invoicing
          Policy:
        </Text>
       <ul className="list-disc ml-10 text-[14px] font-medium space-y-3 mb-3">
          <li>
            100% of the payment is due upon your receiving an invoice through
            email. This option is exceptional, if the payment opted for is
            through instalment mode.
          </li>
          <li>
            You agree to the invoice provided for online billing as suitable for
            your payment purpose and the information contained in the invoice as
            adequate for you to make timely payment upon receipt of the same
            through e-mail.
          </li>
          <li>
            While using any payment method available to pay the invoice online,
            Invensis Learning will not be responsible or does not assume any
            liability whatsoever, in respect of any loss or damage arising
            directly or indirectly to you or your business due to lack of
            authorization for any transaction/s; or exceeding the preset limit
            mutually agreed by you and between your company's 'bank/s'; or any
            payment issues arising out of the transaction; or decline of your
            online payment transaction for any other reason/s.
          </li>
          <li>
            You/your company agrees to defend, indemnify, save and hold Invensis
            Learning harmless from any and all demands, liabilities, losses,
            costs and claims that may arise or result from any technical failure
            or incorrect use of the online payment process.
          </li>
          <li>
            Invensis Learning will not be held responsible for any damages your
            company may suffer as a result of using the payment process. If your
            online payment is declined for some reason, alternate payment
            instructions must be provided by you or your company or its
            stakeholders to Invensis Learning within 48 hours from the receipt
            of the invoice, else your order is liable to be cancelled. Your
            alternate instructions can be emailed to{" "}
           <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="mailto:contact@invensislearning.com">
              contact@invensislearning.com
            </Link>
            .
          </li>
          <li>
            Our invoicing facility automatically encrypts your confidential
            information in transit from your computer to ours using the 128-bit
            Secure Sockets Layer protocol (SSL) for 100% safe and secure online
            payment.
          </li>
        </ul>
        <Text className="leading-7 mb-2">
          Please email{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="mailto:billing@invensislearning.com">
            billing@invensislearning.com
          </Link>{" "}
          for any questions related to the invoice providing the invoice number,
          invoice date and product description.
        </Text>
        <Text className="leading-7 mb-2">
          Please email{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="mailto:billing@invensislearning.com">
            billing@invensislearning.com
          </Link>{" "}
          for refund/cancellation requests. Please refer to our{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="/refund-policy">
            Refund/Cancellation Policy
          </Link>{" "}
          for more information.&nbsp;
        </Text>
        <Text className="leading-7 mb-2">
          Please email{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="mailto:billing@invensislearning.com">
            billing@invensislearning.com
          </Link>{" "}
          for rescheduling policy requests. Please refer to our{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold" href="/rescheduling-policy">
            Rescheduling Policy
          </Link>{" "}
          for more information.&nbsp;
        </Text>
        <br />
        <Text variant="h3" className="my-3">Jurisdiction</Text>
        <Text className="leading-7 mb-2">
          The foregoing are subject to the laws of the Republic of India and the
          courts in Bangalore, India, shall have the exclusive jurisdiction on
          any dispute that may arise out of the use of this Site.
        </Text>
        <br />
        <Text className="leading-7 mb-2">
          For any further queries, you may contact us at:&nbsp; <br />
        </Text>
        <Text className="leading-7 mb-2">
          USA
          <br />
          <span>Invensis Inc.,</span>
          <br /> 1000 N West Street, Suite 1200, Wilmington, <br /> DE 19801
        </Text>
        <Text className="leading-7 mb-2">
          INDIA
          <br />
          Invensis Learning Pvt Ltd &nbsp;
          <br /> 1321, Sarakki Extension,100 feet ring road,
          <br /> Marenahalli,&nbsp;
          <br /> 2nd phase J P Nagar,&nbsp;
          <br /> Bangalore - 560078&nbsp;
          <br /> E-mail: contact@invensislearning.com
          <br /> Website:{" "}
         <Link className="text-primary dark:text-primary-foreground underline font-semibold"
            style={{ color: "inherit", textDecoration: "none" }}
            href="/"
          >
            https://www.invensislearning.com/
          </Link>
        </Text>
        <br />
        <Text className="leading-7 mb-2">
          Please proceed only if you accept all the conditions enumerated herein
          above, out of your free will and consent.
        </Text>
      </Container>
    </>
  ),
};

export async function generateMetadata() {
  const { TermsandconditionsData: getTermsandconditionsData } = await getTermsandconditions();
  return generateDynamicMetadata(getTermsandconditionsData);
};

const TermsAndConditions = async () => {
  let getTermsandconditionsData, error;
  ({ TermsandconditionsData: getTermsandconditionsData, error } =
    await getTermsandconditions());
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { pageContents } = getTermsandconditionsData;
  const renderTemplate = (template, content) => {
    const TemplateComponent = templateMapping[template];
    return TemplateComponent ? (
      <TemplateComponent
        content={content}
        globaldata={getTermsandconditionsData}
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
      {getTermsandconditionsData && getTermsandconditionsData.pageContents ? (
        renderContent(pageContents)
      ) : (
        <div>No infodata available</div>
      )}
    </div>
  );
};

export default TermsAndConditions;
