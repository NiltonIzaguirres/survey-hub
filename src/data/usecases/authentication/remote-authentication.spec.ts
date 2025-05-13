import { HttpPostClient } from "@/data/ protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";


describe('RemoteAuthentication', () => {
  test('Should call HtppPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post (url: string): Promise<void>  {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'https://example.com/api/auth';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe('https://example.com/api/auth');
  });
});