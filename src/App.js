import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

function App() {
  const { signOut } = useAuthenticator();
  return (
    <div className="App">
      <header>
        <img
          src={
            "https://amplify-test-storage-d3kia2swmdxvmk103235-staging.s3.us-east-2.amazonaws.com/public/maks.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQ25U2BXWXHNZCGME%2F20211224%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20211224T114142Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLWVhc3QtMiJIMEYCIQCTo1NHqo%2BjxKZmKJaYxITvA6kDzHz6FKDAxY3H8hWttQIhAMBdc2KgFptSXq6bh%2BJoSaGahoj2GJymRUWPCs%2BgBkHJKsQECF0QAhoMMDU3ODI0MzgyNDQ1IgwEe9z9T0%2FbHzzTwQMqoQRq1kVnPlO7Cyhpdbjx6GicVqcJ6NaLyxVxVOcoJKDZhm2j1pNaBFbyGtwWxhBLsdVe3b8gDMvk8EnR3YUr1fXrFw%2BOSRFcodRUgfrQ1NErlZ2HuX76Paq%2Fgt%2BkWtNYTCMi23tqh%2FS36ELHLW0so5QfLEBQKlvs4Edfqhf24M%2FiBvEjGtewOZiQe2Pvvjw1g88XibZea8OE17lQwV4Q8PhHzxTmzZunEQMS9fE7kgGWzmfs2OI4IDNf3scViuQoJBX0uA9FkB3ut9GIcV7yP3x3xA42hkM%2FXDskcCvfOEHEnn1uGndLlLrY%2BeGggQkT108TWwroR8wbH%2BKwyKHfSCEeABEzjvmxGxRZJjxYkWKoBcUQCnKgcqr32claqap1Ht7LQvEufQGZQf5ZB3uWQbz%2FA5gej9ROFZE%2FU7YkSV0mUIhaMzJixtEcrwI%2FjdL2vh8JFc2p6YFLEVfcrKWJgcrvvBWW8JEHkoS%2Bmx9DkMWXMxpOZOKC1if269L%2BYd56BTm9r%2Bw3O%2FhsqInRmM%2F4BkbB%2FazWHFHPDKuVJQbmTg0Ml%2F1b3TDM%2B48s30tXjEDUkqZPPMUn0zo89TY4mET9O%2Faw8Cl%2BDAyknBpeKp%2FjKZ2joMk5OTF1fePAT4uv5bqdW9XJtON9rL%2FmMZX2A9v2bmvo%2FM4nQwgx%2FlihU4YLYqUcn9SkKM7MO4wVPIHxNM%2BC9VxS0X4xn2AIz8aBjb%2BvGhRDMTDx45aOBjqEAvM9Ve8QJhkzx4zDYtA2CXhpM2YlDH0%2FgLGc9qAKtoSi3lwmbhzOhaS7YTIZz60kYwq%2BtHZpPqQmOdK%2F71Dvy6k9rl%2Fh9fHWwCrLVe251H6S73piZxV1WC37VFQgVTlJ4A3XMCZA1EU%2F9hkcqI7oJXdlfK5qRM02k8fcwPIM8lMLV9tUytRWn20NZN2yjGBkI2pWqtO7SMfyM6%2Fwj1p6rGwn22AtdcVpyYpf6o9NvHn3h0w9UPzfHVYjz3VmkQ8lf29dDBdv8LeofUHr2hc8EnpuKFWDRRXkHAUnzLOw74X984JfA7o%2Feh%2BB6GTkAkxuBg%2FNOCRVni6iajdwUQ03LV%2ByauDa&X-Amz-Signature=f18d3aa301881a167856b7970666637f2e21d1216cbcc3f060a23dc7611bbbe4&X-Amz-SignedHeaders=host"
          }
          className="App-logo"
          alt="logo"
        />
        <h1>We now have Auth! And Maks Pizduk!</h1>
      </header>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
}

export default withAuthenticator(App);
