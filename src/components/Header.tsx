import { GoogleLogin } from "@react-oauth/google"
import { useTranslation } from "react-i18next"

const Header = () => {

  const { t, i18n } = useTranslation()

  const handleSubmit = (e: any) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>

        <div className="container mx-auto flex justify-between p-5 bg-[#fdfcfc]">
        <div className="flex gap-20">
          <p className="h-full text-center flex items-center px-3 rounded-[5px] bg-[#eee]">{t("home")}</p>
          <p className="h-full text-center flex items-center px-3 rounded-[5px] bg-[#eee]">{t("About")}</p>
          <p className="h-full text-center flex items-center px-3 rounded-[5px] bg-[#eee]">{t("Contact")}</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <select name="" id="" onChange={handleSubmit} className="h-full px-2 rounded-[5px]  bg-[#eee]">
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <div style={{ width: "200px" }}>
            <GoogleLogin
              onSuccess={(credentialResponse: any) => {
                console.log(credentialResponse);
                localStorage.setItem('credential', credentialResponse.credential)
              }}
              onError={() => {
                console.log('Login Failed');
              }}

              theme="outline"
              size="large"
              text="signin_with"
              shape="pill"
            />;
          </div>
        </div>
      </div>
    </>
  )
}

export default Header


