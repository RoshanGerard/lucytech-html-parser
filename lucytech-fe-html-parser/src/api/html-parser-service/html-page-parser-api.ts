import {HtmlParserCoreApi} from "./html-parser-core-api.ts";
import {HtmlContextDetailsRequestDto} from "./dto/html-context-details.request.dto.ts";
import {HtmlContextDetailsResponseDto} from "./dto/html-context-details.response.dto.ts";

export class HtmlPageParserApi extends HtmlParserCoreApi {

    public constructor() {
        super();
    }

    public async getHtmlMetadata(payload: HtmlContextDetailsRequestDto): Promise<HtmlContextDetailsResponseDto> {
        const response = await this.post('/api/url-info', payload);
        return response.data.payload as HtmlContextDetailsResponseDto;
    }
}