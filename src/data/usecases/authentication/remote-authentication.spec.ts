import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";


describe('RemoteAuthentication', () => {
  test('Should call HtppPostClient with correct URL', async () => {
    const url = 'https://example.com/api/auth';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe('https://example.com/api/auth');
  });
});