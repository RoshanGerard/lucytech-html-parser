export class HtmlContextDetailsResponseDto {

    htmlVersion: string;
    title: string;
    internalLinks: number;
    externalLinks: number;
    isLoginForm: boolean;

    constructor(htmlVersion: string, title: string, internalLinks: number, externalLinks: number, isLoginForm: boolean) {
        this.htmlVersion = htmlVersion;
        this.title = title;
        this.internalLinks = internalLinks;
        this.externalLinks = externalLinks;
        this.isLoginForm = isLoginForm;
    }
}