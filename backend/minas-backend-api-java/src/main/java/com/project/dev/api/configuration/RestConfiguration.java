/*
 * @fileoverview    {RestConfiguration} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * TODO: Definición de {@code RestConfiguration}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Configuration
public class RestConfiguration {

    /**
     * Configura el filtro de cors.
     *
     * @return el nuevo filtro.
     */
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        //config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        config.addAllowedHeader("Authorization");
        config.addExposedHeader("Authorization");
        config.addAllowedHeader("Link");
        config.addExposedHeader("Link");
        config.addAllowedHeader("X-Total-Count");
        config.addExposedHeader("X-Total-Count");
        config.addAllowedHeader("Access-Control-Allow-Headers");
        config.addAllowedHeader("access-control-expose-headers");
        config.addAllowedHeader("Access-Control-Request-Method");
        config.addAllowedHeader("Access-Control-Request-Headers");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}
