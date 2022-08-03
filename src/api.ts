import { IjwtToken, IsignInParam } from "./interface/interfaces";
import { promises } from "dns";
import { useSetRecoilState } from "recoil";
import { authAtom } from "./atoms";

const BASE_URL = "http://119.203.225.3:8081";

export async function fetchAuthAdmin(par: IsignInParam) {
  const param = `identifier=${par.id}&password=${par.pw}`;
  try {
    const authResponse = await (await fetch(`${BASE_URL}/admin/login?${param}`))
      .json()
      .then((res) => {
        localStorage.setItem("token", res.accessToken);
        const authState = useSetRecoilState(authAtom);
      });
  } catch (e) {
    alert(e);
  }
}
