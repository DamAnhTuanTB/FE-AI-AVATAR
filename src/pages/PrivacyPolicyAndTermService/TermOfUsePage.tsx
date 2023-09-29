import React from 'react';
import {
  MainTitle,
  UpdatedAt,
  Wrapper,
  Content,
  SubTitle,
  Title,
} from './styles';
import Layout from './Layout';

export default function TermOfUsePage() {
  return (
    <Layout>
      <Wrapper>
        <MainTitle>Terms Of Use</MainTitle>
        <UpdatedAt>Last updated September 28, 2023</UpdatedAt>
        <div>
          <Content>
            Please read these Terms of Use carefully before using the{' '}
            <a href={' https://avatarist.ai/ '}> https://avatarist.ai/ </a>
            website (the “Service”) operated by VisionLab.
            <br />
            <br />
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who access or use the Service.
            <br />
            <br />
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </Content>

          <Title>Communications</Title>
          <Content>
            By creating an Account on our service, you agree to subscribe to
            newsletters, marketing or promotional materials, and other
            information we may send. However, you may opt-out of receiving any,
            or all, of these communications from us by following the unsubscribe
            link or instructions provided in any email we send.
          </Content>

          <Title>Purchases</Title>
          <Content>
            {`If you wish to purchase any product or service made available through
          the Service ("Purchase"), you may be asked to supply certain
          information relevant to your Purchase including, without limitation,
          your credit card number, the expiration date of your credit card, your
          billing address, and your shipping information.`}
            <br />
            <br />
            You represent and warrant that: (i) you have the legal right to use
            any credit card(s) or other payment methods (s) in connection with
            any Purchase; and that (ii) the information you supply to us is
            true, correct, and complete.
            <br />
            <br />
            The Service may employ the use of third-party services for the
            purpose of facilitating payment and the completion of Purchases. By
            submitting your information, you grant us the right to provide the
            information to these third parties subject to our Privacy Policy.
            <br />
            <br />
            We reserve the right to refuse or cancel your order at any time for
            reasons including but not limited to product or service
            availability, errors in the description or price of the product or
            service, error in your order, or other reasons.
            <br />
            <br />
            We reserve the right to refuse or cancel your order if fraud or an
            unauthorized or illegal transaction is suspected.
          </Content>

          <Title>Availability, Errors, and Inaccuracies</Title>
          <Content>
            We are constantly updating product and service offerings on the
            Service. We may experience delays in updating information on the
            Service and in our advertising on other websites. The information
            found on the Service may contain errors or inaccuracies and may not
            be complete or current. Products or services may be mispriced,
            described inaccurately, or unavailable on the Service and we cannot
            guarantee the accuracy or completeness of any information found on
            the Service.
            <br />
            <br />
            We, therefore, reserve the right to change or update information and
            to correct errors, inaccuracies, or omissions at any time without
            prior notice.
          </Content>

          <Title>Contests, Sweepstakes, and Promotions</Title>
          <Content>
            {`Any contests, sweepstakes or other promotions (collectively,
          "Promotions") made available through the Service may be governed by
          rules that are separate from these Terms. If you participate in any
          Promotions, please review the applicable rules as well as our Privacy
          Policy. If the rules for a Promotion conflict with these Terms, the
          Promotion rules will apply.`}
          </Content>

          <Title>Content</Title>
          <Content>
            {`Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material ("Content"). You are responsible for the Content that you
          post on or through the Service, including its legality, reliability,
          and appropriateness.`}
            <br />
            <br />
            By posting Content on or through the Service, you represent and
            warrant that: (i) the Content is yours (you own it) and/or you have
            the right to use it and the right to grant us the rights and license
            as provided in these Terms, and (ii) that the posting of your
            Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other
            rights of any person or entity. We reserve the right to terminate
            the account of anyone found to be infringing on a copyright.
            <br />
            <br />
            You retain any and all of your rights to any Content you submit,
            post or display on or through the Service and you are responsible
            for protecting those rights. We take no responsibility and assume no
            liability for the Content you or any third party post on or through
            the Service. However, by posting Content using the Service you grant
            us the right and license to use, modify, perform, display,
            reproduce, and distribute such Content on and through the Service.
            <br />
            <br />
            VisionLab Inc has the right but not the obligation to monitor and
            edit all Content provided by users.
            <br />
            <br />
            In addition, Content found on or through this Service is the
            property of VisionLab Inc or used with permission. You may not
            distribute, modify, transmit, reuse, download, repost, copy, or use
            said Content, whether in whole or in part, for commercial purposes
            or for personal gain, without express advance written permission
            from us.
          </Content>

          <Title>Accounts</Title>
          <Content>
            When you create an account with us, you guarantee that you are above
            the age of 16 and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on the Service.
            <br />
            <br />
            You are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our Service or a third-party service. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
            <br />
            <br />
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar, or obscene.
            <br />
            <br />
            We reserve the right to refuse service, terminate accounts, remove
            or edit content, or cancel orders at our sole discretion.
            <br />
            <br />
            VisionLab offers two different service accounts:
            <br />
            <br />
            <SubTitle>Basic Account</SubTitle>
            <br />
            <br />
            {`If you select the "Basic Account", you may (i) use the VisionLab photo
          effects available via our website to alter your photos (a “Raw
          Photo”); (ii) distribute your Raw Photos that have undergone the
          VisionLab photo effects (a "VisionLab Image") to others; (iii) display
          your VisionLab Images on other web sites; including but not limited
          to, social networking sites such as Facebook, Instagram, and LinkedIn;
          and (iv) you may sell or otherwise commercially benefit from your
          images edited with VisionLab Basic Account features.`}
            <br />
            <br />
            <SubTitle>Plus Account</SubTitle>
            <br />
            <br />
            {`If you select the "Plus Account" and pay the Plus Account fees, you
          may: (i) use the VisionLab photo effects available via our website to
          alter your and others' Raw Photos; (ii) distribute your and/or others'
          VisionLab Images to others; (iii) display your and/or others'
          VisionLab Images on other web sites including, but not limited to,
          social networking sites such as Facebook, Instagram, and LinkedIn; and
          (iv) sell or otherwise commercially benefit from your images edited
          with VisionLab Plus Account features.`}
            <br />
            <br />
            You may not grant your rights to any other person. For example, you
            may not allow others to use your Premium Account to create VisionLab
            Images.
            <br />
            <br />
            <SubTitle>{`Plus Account Subsription Renewal`}</SubTitle>
            <br />
            <br />
            Your VisionLab subscription will automatically renew at its
            expiration date unless you cancel it prior to your payment date. A
            monthly subscription renews after 30 days from the purchase date and
            an annual subscription renews after 365 days from the purchase date.
            If you cancel your subscription any time before your payment
            processing date, you will continue to have an active subscription
            until the date on which your next payment was scheduled. For
            example, if your payment is scheduled for the 30th, but you cancel
            your subscription on the 15th, you will still have an active
            subscription until the 30th.
            <br />
            <br />
            You may cancel your subscription at any time from your My Account
            page. Due to security and privacy reasons, under no circumstances
            will VisionLab cancel a subscriber’s subscription via email or
            phone. A subscription cancellation can only be made by the
            respective subscriber from their My Account page.
            <br />
            <br />
            {`If you decide to cancel your subscription after your payment has been
          processed, VisionLab will not issue a refund. Learn more about
          VisionLab's Renewal Policy by visiting this page.`}
          </Content>

          <Title>Account Fees and Further Account Details</Title>
          <Content>
            The fees and other details with respect to each account are set
            forth at Account Details. VisionLab, at its sole discretion, may
            modify account fees. <br /> VisionLab will not be obligated to issue
            any refunds for any fees charged to your Credit/Debit Card/PayPal
            Account.
            <br />
            <br />
            <SubTitle>{`Account Terms
`}</SubTitle>
            <br />
            <br />
            You represent and warrant that:
            <br />
            <br />
            <ul>
              <li>
                You are authorized to use and have fees charged to the credit
                card number, debit card number or PayPal account you provide via
                our website.
              </li>
              <li>
                You are authorized to use, upload, modify and create derivative
                works of all Raw Photos you upload to our website.
              </li>
              <li>
                You are authorized to distribute and display all VisionLab
                Images you create via our website.
              </li>
              <li>
                All of your registration and account information is true,
                accurate and complete.
              </li>
              <li>You will maintain the security of your password.</li>
              <li>
                You accept all responsibility for all activity that occurs under
                your user name.
              </li>
            </ul>
            Any breach or suspected breach of any of the above representations
            or warranties may result in immediate termination of your account or
            suspension of your account without, if applicable, any refund.
          </Content>

          <Title>{`VisionLab's Rights with Respect to your VisionLab Images`}</Title>
          <Content>
            {`If you make your VisionLab Image available to the public on our
          website, VisionLab has the right to use your VisionLab Image anywhere
          on our website (including, but not limited to, displaying your
          VisionLab Image on VisionLab's Editors Choice page).`}
          </Content>

          <Title>Minors</Title>
          <Content>
            In order to create an account, you must be 16 years of age or older.
            If children between the ages of 16 and 18 wish to use the Site, they
            must be registered by their parent or guardian. By registering, you
            represent and warrant that you are 16 years of age or older.
          </Content>

          <Title>Copyright Policy</Title>
          <Content>
            {`We respect the intellectual property rights of others. It is our
          policy to respond to any claim that Content posted on the Service
          infringes on the copyright or other intellectual property rights
          ("Infringement") of any person or entity.`}
            <br />
            <br />
            If you are a copyright owner or authorized on behalf of one, and you
            believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim via
            email to <a href={`mailto:dmca@VisionLab.ai`}>dmca@VisionLab.ai</a>,
            with the subject line:{' '}
            {`"Copyright Infringement"
          and include in your claim a detailed description of the alleged
          Infringement as detailed below, under "DMCA Notice and Procedure for
          Copyright Infringement Claims"`}
            <br />
            <br />
            {`You may be held accountable for damages (including costs and
          attorneys' fees) for misrepresentation or bad-faith claims on the
          infringement of any Content found on and/or through the Service on
          your copyright.`}
          </Content>

          <Title>
            DMCA Notice and Procedure for Copyright Infringement Claims
          </Title>
          <Content>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our Copyright Agent with the
            following information in writing (see 17 U.S.C 512(c)(3) for further
            detail):
            <br />
            <br />
            <ul>
              <li>
                {`an electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright's interest;`}
              </li>
              <li>
                a description of the copyrighted work that you claim has been
                infringed, including the URL (i.e., web page address) of the
                location where the copyrighted work exists or a copy of the
                copyrighted work;
              </li>
              <li>
                identification of the URL or other specific location on the
                Service where the material that you claim is infringing is
                located;
              </li>
              <li>your address, telephone number, and email address;</li>
              <li>
                a statement by you that you have a good faith belief that the
                disputed use is not authorized by the copyright owner, its
                agent, or the law;
              </li>
              <li>
                {`a statement by you, made under penalty of perjury, that the above
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's
              behalf.`}
              </li>
            </ul>
            You can contact our Copyright Agent via email at dmca@VisionLab.ai
          </Content>

          <Title>Intellectual Property</Title>
          <Content>
            The Service and its original content (excluding Content provided by
            users), features and functionality are and will remain the exclusive
            property of VisionLab Inc and its licensors. The Service is
            protected by copyright, trademark, and other laws of both the United
            States and foreign countries. Our trademarks and trade dress may not
            be used in connection with any product or service without the prior
            written consent of VisionLab Inc. ies/privacy
          </Content>

          <Title>Links to Other Web Sites</Title>
          <Content>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by VisionLab Inc
            <br />
            <br />
            VisionLab Inc has no control over and assumes no responsibility for
            the content, privacy policies, or practices of any third-party
            websites or services. We do not warrant the offerings of any of
            these entities/individuals or their websites.
            <br />
            <br />
            You acknowledge and agree that VisionLab Inc shall not be
            responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with the use
            of or reliance on any such content, goods or services available on
            or through any such third party web sites or services.
            <br />
            <br />
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party websites or services that you visit.
          </Content>

          <Title>Termination</Title>
          <Content>
            We may terminate or suspend your account and bar access to the
            Service immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
            <br />
            <br />
            If you wish to terminate your account, you may simply discontinue
            using the Service.
            <br />
            <br />
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </Content>

          <Title>Indemnification</Title>
          <Content>
            {`You agree to defend, indemnify and hold harmless VisionLab Inc and its
          licensee and licensors, and their employees, contractors, agents,
          officers, and directors, from and against any and all claims, damages,
          obligations, losses, liabilities, costs, or debt, and expenses
          (including but not limited to attorney's fees), resulting from or
          arising out of a) your use and access of the Service, by you or any
          person using your account and password; b) a breach of these Terms, or
          c) Content posted on the Service.`}
          </Content>

          <Title>Limitation of Liability</Title>
          <Content>
            IN NO EVENT SHALL VisionLab INC, NOR ITS DIRECTORS, EMPLOYEES,
            PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES,
            INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL,
            OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE
            OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR
            CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT
            OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR
            ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON
            WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL
            THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF
            SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE
            FAILED OF ITS ESSENTIAL PURPOSE.
          </Content>

          <Title>Disclaimer</Title>
          <Content>
            {`YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED
          ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED
          WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING,
          BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
          VisionLab INC, ITS SUBSIDIARIES, AFFILIATES, AND ITS LICENSORS DO NOT
          WARRANT THAT A) THE SERVICE WILL FUNCTION UNINTERRUPTED, SECURE, OR
          AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; B) ANY ERRORS OR DEFECTS
          WILL BE CORRECTED; C) THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL
          COMPONENTS; OR D) THE RESULTS OF USING THE SERVICE WILL MEET YOUR
          REQUIREMENTS.`}
          </Content>

          <Title>Exclusions</Title>
          <Content>
            Some jurisdictions do not allow the exclusion of certain warranties
            or the exclusion or limitation of liability for consequential or
            incidental damages, so the limitations above may not apply to you.
          </Content>

          <Title>Governing Law</Title>
          <Content>
            These Terms shall be governed and construed in accordance with the
            laws of Oregon, United States, without regard to its conflict of law
            provisions.
            <br />
            <br />
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have had between us regarding the Service.
          </Content>

          <Title>Changes</Title>
          <Content>
            {`We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will provide at
          least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.`}
            <br />
            <br />
            By continuing to access or use our Service after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            the Service.
          </Content>

          <Title>Contact Us</Title>
          <Content>
            If you have any questions about these Terms, please contact us:
            <br />
            <br />
            <ul>
              <li>
                By email:{' '}
                <a href={'mailto:hello@avatarist.ai'}>hello@avatarist.ai</a>
              </li>
              <li>Through the online form on our website</li>
            </ul>
          </Content>
        </div>
      </Wrapper>
    </Layout>
  );
}
