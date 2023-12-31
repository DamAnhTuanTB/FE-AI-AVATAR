import Layout from './Layout';
import {
  Content,
  MainTitle,
  SubTitle,
  Title,
  UpdatedAt,
  Wrapper,
} from './styles';
import {Helmet} from "react-helmet";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - Avatarist.ai</title>
        <meta name="description"
              content='Read our privacy policy to understand how we protect your data and ensure a secure avatar creation experience.'/>
      </Helmet>
      <Wrapper>
        <MainTitle>Privacy Policy</MainTitle>
        <UpdatedAt>Last updated September 28, 2023</UpdatedAt>
        <div>
          <Content>
            VisionLab, Inc {`("us", "we", or "our")`} operates the{' '}
            <a href={'https://avatarist.ai/'}>https://avatarist.ai/</a> website
            and Avatarist mobile applications {`(the "Service").`}
            <br />
            <br />
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
            <br />
            <br />
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, terms used in this Privacy Policy have the same
            meanings as in our Terms of Use, accessible from{' '}
            <a href={'https://avatarist.ai/terms/'}>
              https://avatarist.ai/terms/
            </a>{' '}
          </Content>

          <Title>Definitions</Title>
          <Content>
            <SubTitle>Service:</SubTitle> The service is the{' '}
            <a href={' https://avatarist.ai/'}>https://avatarist.ai/</a> website
            and the mobile applications operated by VisionLab, Inc
            <br />
            <br />
            <SubTitle>Personal Data:</SubTitle> Personal Data means any data
            that identifies or that can be used to identify an individual.
            <br />
            <br />
            For the purposes of the California Consumer Privacy Act (CCPA),
            Personal Data means any information that identifies, relates to,
            describes, or is capable of being associated with, or could
            reasonably be linked, directly or indirectly, with a particular
            Consumer or household.
            <br />
            <br />
            <SubTitle>Usage Data:</SubTitle> Usage Data is data collected
            automatically either generated by the use of the Service or from the
            Service infrastructure itself (for example, the duration of a page
            visit).
            <br />
            <br />
            <SubTitle>Cookies:</SubTitle> Cookies are files with a small amount
            of data stored on your device (computer or mobile device).
            <br />
            <br />
            <SubTitle>Data Controller:</SubTitle> Data Controller means the
            natural or legal person who (either alone or jointly or in common
            with other persons) determines the purposes for which and the manner
            in which any personal information are, or are to be, processed.
            <br />
            <br />
            For the purpose of this Privacy Policy, we are a Data Controller of
            your Personal Data.
            <br />
            <br />
            <SubTitle>Data Processors (or Service Providers): </SubTitle>
            Data Processor (or Service Provider) means any natural or legal
            person who processes the data on behalf of the Data Controller. We
            may use the services of various Service Providers in order to
            process your data more effectively.
            <br />
            <br />
            <SubTitle>Data Subject (or User or Consumer): </SubTitle>
            Data Subject is any individual who is using our Service and is the
            subject of Personal Data.
          </Content>

          <Title>Information Collection and Use</Title>
          <Content>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
            <br />
            <br />
            {/* subtitle */}
            <SubTitle>Types of Data Collected</SubTitle>
            <br />
            <br />
            While using our Service, we may ask you to provide us with certain
            Personal Data, which may include:
            <br />
            <br />
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
              <li>Photographs and graphics</li>
              <li>
                Record of correspondence when you contact us through customer
                support.
              </li>
            </ul>
            We may use your Personal Data to contact you with newsletters,
            marketing or promotional materials, and other information that may
            be of interest to you. You may opt-out of receiving any, or all, of
            these communications from us by following the unsubscribe link or
            instructions provided in any email we send.
            <br />
            <br />
            {/* subtitle */}
            <SubTitle>Usage Data</SubTitle>
            <br />
            <br />
            {`We may collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").`}
            <br />
            <br />
            {`This Usage Data may include information such as your computer's
          Internet Protocol address (i.e., IP address), browser type, browser
          version, the pages of our Service that you visit, the time and date of
          your visit, the time spent on those pages, unique device identifiers
          and other diagnostic data.`}
            <br />
            <br />
            When you access the Service with a mobile device, this Usage Data
            may include information such as the type of mobile device you use,
            the IP address of your mobile device, your mobile operating system,
            the type of mobile Internet browser you use, unique device
            identifiers and other diagnostic data.
            <br />
            <br />
            {/* subtitle */}
            <SubTitle> Tracking & Cookies Data</SubTitle>
            <br />
            <br />
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information.
            <br />
            <br />
            Cookies are files with a small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Tracking technologies also used
            are beacons, tags, and scripts to collect and track information and
            to improve and analyze our Service.
            <br />
            <br />
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Service.
            <br />
            <br />
            Examples of Cookies we use:
            <br />
            <br />
            <ul>
              <li>
                Session Cookies. We use Session Cookies to operate our Service.
              </li>
              <li>
                Preference Cookies. We use Preference Cookies to remember your
                preferences and various settings.
              </li>
              <li>
                Security Cookies. We use Security Cookies for security purposes.
              </li>
              <li>
                Advertising Cookies. Advertising Cookies serve you with
                advertisements that may be relevant to you and your interests.
              </li>
            </ul>
            {/* subtitle */}
            <SubTitle> Photographs and Graphics</SubTitle>
            <br />
            <br />
            We use your photographs and graphics to provide the Service.
            <br />
            <br />
            The photographs and graphics that you upload to our website are
            always private, and they may never ever be public without your
            consent, that is unless you are opt-in to make them public. If you
            ever elect to make your photographs and graphics that you upload to
            our website to be public, we may use them for editorial purposes in
            line with our Terms of Use, accessible from{' '}
            <a href={'https://avatarist.ai/terms/'}>
              https://avatarist.ai/terms/
            </a>
            , for example, your photograph may appear on our website as a
            featured image. You may always make your public photographs and
            graphics private and we will cease to use them for any purpose other
            than providing the Service.
            <br />
            <br />
            Remember that you can delete your Personal Data directly within your
            Account Settings section. If you are unable to perform these actions
            yourself, please contact us to assist you.
            <br />
            <br />
            {/* subtitle */}
            <SubTitle>
              Information from Third-Party Social Media Services
            </SubTitle>
            <br />
            <br />
            VisionLab, Inc. allows you to create an account and log in to use
            the Service through third-party social media services, such as
            Google, Facebook, and Twitter.
            <br />
            <br />
            {`If you decide to register through or otherwise grant us access to a
          third-party social media service, we may collect Personal Data that is
          already associated with your third-party social media service's
          account, such as your name, your email address associated with that
          account.`}
            <br />
            <br />
            {`You may also have the option of sharing additional information with us
          through your third-party social media service's account. If you choose
          to provide such information and Personal Data, during registration or
          otherwise, you are giving us permission to use, share, and store it in
          a manner consistent with this Privacy Policy.`}
            <br />
            <br />
            If you choose to use any third-party social media sites, services,
            or features in connection with the Service, such features and any
            information transferred to us will be governed by the privacy
            policies of the respective third-party social media services. We
            have no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party sites or services.
          </Content>

          <Title>Use of Data</Title>
          <Content>
            VisionLab, Inc uses the collected data for various purposes:
            <br />
            <br />
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To process payments</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To provide you with news, special offers, and general
                information about other goods, services, and events that we
                offer that are similar to those that you have already purchased
                or enquired about unless you have opted not to receive such
                information
              </li>
            </ul>
          </Content>

          <Title>Retention of Data</Title>
          <Content>
            VisionLab, Inc will retain your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies. VisionLab, Inc will
            also retain Usage Data for internal analysis purposes. Usage Data is
            generally retained for a shorter period of time, except when this
            data is used to strengthen the security or to improve the
            functionality of our Service, or we are legally obligated to retain
            this data for longer time periods.
          </Content>

          <Title>Transfer of Data</Title>
          <Content pre-line>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country, or other governmental jurisdiction where the data
            protection laws may differ from those from your jurisdiction.
            {'\n'}
            {'\n'}
            If you are located outside the United States and choose to provide
            information to us, please note that we transfer the data, including
            Personal Data, to the United States and process it there.
            {'\n'}
            {'\n'}
            Your consent to this Privacy Policy followed by your submission of
            such information represents your agreement to that transfer.
            {'\n'}
            {'\n'}
            VisionLab, Inc will take all steps reasonably necessary to ensure
            that your data is treated securely and in accordance with this
            Privacy Policy and no transfer of your Personal Data will take place
            to an organization or a country unless there are adequate controls
            in place including the security of your data and other personal
            information.
          </Content>

          <Title>Disclosure of Data</Title>
          <Content>
            <SubTitle>Business Transaction</SubTitle>
            <br />
            <br />
            If VisionLab, Inc is involved in a merger, acquisition or asset
            sale, your Personal Data may be transferred. We will provide notice
            before your Personal Data is transferred and becomes subject to a
            different Privacy Policy.
            <br />
            <br />
            <SubTitle>Disclosure for Law Enforcement</SubTitle>
            <br />
            <br />
            Under certain circumstances, VisionLab, Inc may be required to
            disclose your Personal Data if required to do so by law or in
            response to valid requests by public authorities (e.g. a court or a
            government agency).
            <br />
            <br />
            <SubTitle>Legal Requirements</SubTitle>
            <br />
            <br />
            VisionLab, Inc may disclose your Personal Data in the good faith
            belief that such action is necessary to:
            <br />
            <br />
            <ul>
              <li>To comply with a legal obligation</li>
              <li>
                To protect and defend the rights or property of VisionLab, Inc
              </li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                To protect the personal safety of users of the Service or the
                public
              </li>
              <li>To protect against legal liability</li>
            </ul>
          </Content>

          <Title>Security of Data</Title>
          <Content pre-line>
            The security of your data is important to us, but remember that no
            method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
            {'\n'}
            {'\n'}
            <SubTitle>{`"Do Not Track" Signals`}</SubTitle>
            {'\n'}
            {'\n'}
            {
              'We support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.'
            }
            {'\n'}
            {'\n'}
            You can enable or disable Do Not Track by visiting the Preferences
            or Settings page of your web browser.
          </Content>

          <Title>
            Your Rights Under the General Data Protection Regulation (GDPR)
          </Title>
          <Content pre-line>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. VisionLab, Inc aims to take
            reasonable steps to allow you to correct, amend, delete, or limit
            the use of your Personal Data.
            {'\n'}
            {'\n'}
            VisionLab, Inc may process your Personal Data because:
            <br />
            <br />
            <ul>
              <li>We need to perform a contract with you</li>
              <li>You have given us permission to do so</li>
              <li>
                The processing is in our legitimate interests and it is not
                overridden by your rights
              </li>
              <li>For payment processing purposes</li>
              <li>To comply with the law</li>
            </ul>
            {'\n'}
            {'\n'}
            If you wish to be informed what Personal Data we hold about you and
            if you want it to be removed from our systems, please contact us.
            {'\n'}
            {'\n'}
            You have the following data protection rights:
            <br />
            <br />
            <ul>
              <li>
                The right to access, update or delete the information we have on
                you. Whenever made possible, you can access, update or request
                deletion of your Personal Data directly within your Account
                Settings section. If you are unable to perform these actions
                yourself, please contact us to assist you.
              </li>
              <li>
                The right of rectification. You have the right to have your
                information rectified if that information is inaccurate or
                incomplete.
              </li>
              <li>
                The right to object. You have the right to object to our
                processing of your Personal Data.
              </li>
              <li>
                The right of restriction. You have the right to request that we
                restrict the processing of your personal information.
              </li>
              <li>
                The right to data portability. You have the right to be provided
                with a copy of the information we have on you in a structured,
                machine-readable, and commonly used format.
              </li>
              <li>
                The right to withdraw consent. You also have the right to
                withdraw your consent at any time when VisionLab, Inc relied on
                your consent to process your personal information.
              </li>
            </ul>
            Please note that we may ask you to verify your identity before
            responding to such requests.
            {'\n'}
            {'\n'}
            You have the right to complain to a Data Protection Authority about
            our collection and use of your Personal Data. For more information,
            please contact your local data protection authority in the European
            Economic Area (EEA).
          </Content>

          <Title>Service Providers</Title>
          <Content>
            {` While we do not sell your Personal Data, we may share it for a
          business purpose, i.e., to support our own operational purposes in
          providing the Service. We may employ third-party companies and
          individuals to facilitate our Service ("Service Providers"), to
          provide the Service on our behalf, to perform Service-related
          services, or to assist us in analyzing how our Service is used.`}
            <br />
            <br />
            These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose.
            <br />
            <br />
            <SubTitle>Analytics</SubTitle>
            <br />
            <br />
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
            <br />
            <br />
            <SubTitle>Google Analytics</SubTitle>
            <br />
            <br />
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualize and personalize the ads of its own advertising
            network.
            <br />
            <br />
            You can opt out of having made your activity on the Service
            available to Google Analytics by installing the Google Analytics
            opt-out browser add-on. The add-on prevents the Google Analytics
            JavaScript (ga.js, analytics.js, and dc.js) from sharing information
            with Google Analytics about visits activity.
            <br />
            <br />
            For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms web page:{' '}
            <a href={'http://www.google.com/intl/en/policies/privacy/'}>
              http://www.google.com/intl/en/policies/privacy/
            </a>
            <br />
            <br />
            <SubTitle>Advertising</SubTitle>
            <br />
            <br />
            We may use third-party Service Providers to show advertisements to
            you to help support and maintain our Service.
            <br />
            <br />
            <SubTitle>Google AdSense & DoubleClick Cookie</SubTitle>
            <br />
            <br />
            {`Google, as a third-party vendor, uses cookies to serve ads on our
          Service. Google's use of the DoubleClick cookie enables it and its
          partners to serve ads to our users based on their visit to our Service
          or other websites on the Internet.`}
            <br />
            <br />
            You may opt-out of the use of the DoubleClick Cookie for
            interest-based advertising by visiting the Google Ads Settings web
            page:{' '}
            <a href={'http://www.google.com/ads/preferences/'}>
              http://www.google.com/ads/preferences/
            </a>{' '}
            <br />
            <br />
            <SubTitle>Firebase</SubTitle>
            <br />
            <br />
            We may use third-party Service Providers to analyze service to you
            to help support and maintain our Service
            <br />
            For more information on the privacy practices of Google, please
            visit the Firebase Privacy & Terms web page:{' '}
            <a href={'https://firebase.google.com/policies/analytics'}>
              https://firebase.google.com/policies/analytics
            </a>
          </Content>

          <Title>Behavioral Remarketing</Title>
          <Content>
            VisionLab, Inc uses remarketing services to advertise on third party
            websites to you after you visited our Service. We and our
            third-party vendors use cookies to inform, optimize and serve ads
            based on your past visits to our Service.
          </Content>

          <Title>Google Ads (AdWords)</Title>
          <Content pre-line>
            Google Inc provides Google Ads (AdWords) remarketing service.
            {`\n`}
            {`\n`}
            You can opt-out of Google Analytics for Display Advertising and
            customize the Google Display Network ads by visiting the Google Ads
            Settings page:{' '}
            <a href={'http://www.google.com/settings/ads'}>
              http://www.google.com/settings/ads
            </a>{' '}
            {`\n`}
            {`\n`}
            Google also recommends installing the Google Analytics Opt-out
            Browser Add-on -{' '}
            <a href={'https://tools.google.com/dlpage/gaoptout'}>
              https://tools.google.com/dlpage/gaoptout
            </a>
            - for your web browser. Google Analytics Opt-out Browser Add-on
            provides visitors with the ability to prevent their data from being
            collected and used by Google Analytics.
            {`\n`}
            {`\n`}
            For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms web page:{' '}
            <a href={'https://policies.google.com/privacy?hl=en'}>
              https://policies.google.com/privacy?hl=en
            </a>
          </Content>

          <Title>Payments</Title>
          <Content pre-line>
            We may provide paid products and/or services within the Service. In
            that case, we use third-party services for payment processing (e.g.
            payment processors).
            {`\n`}
            {`\n`}
            We will not store or collect your payment card details. That
            information is provided directly to our third-party payment
            processors whose use of your personal information is governed by
            their Privacy Policy. These payment processors adhere to the
            standards set by PCI-DSS as managed by the PCI Security Standards
            Council, which is a joint effort of brands like Visa, Mastercard,
            American Express and Discover. PCI-DSS requirements help ensure the
            secure handling of payment information.
            {`\n`}
            {`\n`}
            The payment processors we work with are:
            {`\n`}
            {`\n`}
            <SubTitle>Paypal</SubTitle>
            {`\n`}
            {`\n`}
            Their Privacy Policy can be viewed at{' '}
            <a href={'https://www.paypal.com/ua/webapps/mpp/ua/privacy-full'}>
              https://www.paypal.com/ua/webapps/mpp/ua/privacy-full
            </a>
            {`\n`}
            {`\n`}
            <SubTitle>Apple Store In-App Payments</SubTitle>
            {`\n`}
            {`\n`}
            Their Privacy Policy can be viewed at{' '}
            <a href={'https://www.apple.com/legal/privacy/en-ww/'}>
              https://www.apple.com/legal/privacy/en-ww/
            </a>
            {`\n`}
            {`\n`}
            <SubTitle>Google Play In-App Payments</SubTitle>
            {`\n`}
            {`\n`}
            Their Privacy Policy can be viewed at{' '}
            <a href={'https://www.google.com/policies/privacy'}>
              https://www.google.com/policies/privacy
            </a>
          </Content>

          <Title>Links to Other Sites</Title>
          <Content>
            {`Our Service may contain links to other sites that are not operated by
          us. If you click on a third-party link, you will be directed to that
          third party's site. Please review the Privacy Policy of every site you
          visit.`}
            <br />
            <br />
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third-party sites or
            services.
          </Content>

          <Title>{`Children's Privacy`}</Title>
          <Content>
            {`Our Service does not address anyone under the age of 16 ("Children").`}
            <br />
            <br />
            We do not knowingly collect personally identifiable information from
            anyone under the age of 16. If you are a parent or guardian and you
            are aware that your Children have provided us with Personal Data,
            please contact us. If we become aware that we have collected
            Personal Data from children without verification of parental
            consent, we take steps to remove that information from our servers.
          </Content>

          <Title>Changes to This Privacy Policy</Title>
          <Content>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            <br />
            <br />
            {`We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective, and update the
          "effective date" at the top of this Privacy Policy.`}
            <br />
            <br />
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </Content>

          <Title>Contact Us</Title>
          <Content>
            If you have any questions about this Privacy Policy, please contact
            us:
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
