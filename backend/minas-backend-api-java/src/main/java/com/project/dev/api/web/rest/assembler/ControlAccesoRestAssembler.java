/*
 * @fileoverview    {ControlAccesoRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.ControlAccesoDTO;
import com.project.dev.api.web.rest.ControlAccesoRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ControlAccesoRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class ControlAccesoRestAssembler implements RepresentationModelAssembler<ControlAccesoDTO, EntityModel<ControlAccesoDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ControlAccesoDTO> toModel(ControlAccesoDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ControlAccesoRest.class).getEntity(String.valueOf(entityDTO.getIntIdControl()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ControlAccesoRest.class).getAllEntities()).withRel("ControlAcceso"));
    }
}
