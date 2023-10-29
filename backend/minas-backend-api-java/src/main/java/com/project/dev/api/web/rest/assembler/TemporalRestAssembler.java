/*
 * @fileoverview    {TemporalRestAssembler}
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

import com.project.dev.api.dto.TemporalDTO;
import com.project.dev.api.web.rest.TemporalRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code TemporalRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class TemporalRestAssembler implements RepresentationModelAssembler<TemporalDTO, EntityModel<TemporalDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<TemporalDTO> toModel(TemporalDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(TemporalRest.class).getEntity(String.valueOf(entityDTO.getIntIdTemporal()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(TemporalRest.class).getAllEntities()).withRel("Temporal"));
    }
}
