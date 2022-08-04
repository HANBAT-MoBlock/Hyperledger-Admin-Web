import { useRecoilState } from "recoil";
import { authAtom } from "./atoms";

const BASE_URL = "http://119.203.225.3:8081";

export async function fetchAuthAdmin(id: string, pw: string) {
  const param = `identifier=${id}&password=${pw}`;
  try {
    await (await fetch(`${BASE_URL}/admin/login?${param}`))
      .json()
      .then((res) => {
        localStorage.setItem("token", res.accessToken);
        const [state, setState] = useRecoilState(authAtom);
        setState((currVal) => (currVal.accessToken = res.accessToken));
      });
  } catch (e) {
    alert(e);
  }
}
