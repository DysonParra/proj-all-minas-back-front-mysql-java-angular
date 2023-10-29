/*
 * @fileoverview    {PaginationUtil}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.web.rest.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * TODO: Description of {@code PaginationUtil}.
 *
 * @author Dyson Parra
 * @since 11
 */
public final class PaginationUtil {

    /**
     * Constructor.
     *
     */
    private PaginationUtil() {
    }

    /**
     * Agrega headers a la página.
     *
     * @param page    configuración de la páginacion.
     * @param baseUrl enlace base.
     * @return los headers de la página.
     */
    public static HttpHeaders generatePaginationHttpHeaders(Page page, String baseUrl) {

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", Long.toString(page.getTotalElements()));
        String link = "";
        if ((page.getNumber() + 1) < page.getTotalPages()) {
            link = "<" + generateUri(baseUrl, page.getNumber() + 1, page.getSize()) + ">; rel=\"next\",";
        }
        // prev link
        if ((page.getNumber()) > 0) {
            link += "<" + generateUri(baseUrl, page.getNumber() - 1, page.getSize()) + ">; rel=\"prev\",";
        }
        // last and first link
        int lastPage = 0;
        if (page.getTotalPages() > 0) {
            lastPage = page.getTotalPages() - 1;
        }
        link += "<" + generateUri(baseUrl, lastPage, page.getSize()) + ">; rel=\"last\",";
        link += "<" + generateUri(baseUrl, 0, page.getSize()) + ">; rel=\"first\"";
        headers.add(HttpHeaders.LINK, link);
        return headers;
    }

    /**
     * Obtiene el URI de la página.
     *
     * @param baseUrl    enlace base.
     * @param pageNumber número de página.
     * @param pageSize   tamaño de la página.
     * @return el URI de la página.
     */
    private static String generateUri(String baseUrl, int pageNumber, int pageSize) {
        return UriComponentsBuilder.fromUriString(baseUrl)
                .queryParam("page", pageNumber)
                .queryParam("size", pageSize)
                .toUriString();
    }

    /**
     * Agrega parámetros de búsqueda a la página.
     *
     * @param query   enlace suministrado.
     * @param page    configuración de la páginacion.
     * @param baseUrl enlace base.
     * @return los headers de la página.
     */
    public static HttpHeaders generateSearchPaginationHttpHeaders(String query, Page page, String baseUrl) {
        String escapedQuery;
        try {
            escapedQuery = URLEncoder.encode(query, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", Long.toString(page.getTotalElements()));
        String link = "";
        if ((page.getNumber() + 1) < page.getTotalPages()) {
            link = "<" + generateUri(baseUrl, page.getNumber() + 1, page.getSize()) + "&query=" + escapedQuery + ">; rel=\"next\",";
        }
        // prev link
        if ((page.getNumber()) > 0) {
            link += "<" + generateUri(baseUrl, page.getNumber() - 1, page.getSize()) + "&query=" + escapedQuery + ">; rel=\"prev\",";
        }
        // last and first link
        int lastPage = 0;
        if (page.getTotalPages() > 0) {
            lastPage = page.getTotalPages() - 1;
        }
        link += "<" + generateUri(baseUrl, lastPage, page.getSize()) + "&query=" + escapedQuery + ">; rel=\"last\",";
        link += "<" + generateUri(baseUrl, 0, page.getSize()) + "&query=" + escapedQuery + ">; rel=\"first\"";
        headers.add(HttpHeaders.LINK, link);
        return headers;
    }
}
