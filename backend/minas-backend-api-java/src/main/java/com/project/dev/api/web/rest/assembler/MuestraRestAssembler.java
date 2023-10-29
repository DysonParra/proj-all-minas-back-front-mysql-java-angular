/*
 * @fileoverview    {MuestraRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.MuestraDTO;
import com.project.dev.api.web.rest.MuestraRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code MuestraRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class MuestraRestAssembler implements RepresentationModelAssembler<MuestraDTO, EntityModel<MuestraDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<MuestraDTO> toModel(MuestraDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MuestraRest.class).getEntity(String.valueOf(entityDTO.getIntIdMuestra()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MuestraRest.class).getAllEntities()).withRel("Muestra"));
    }
}
